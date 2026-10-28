"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { Product } from "./products";

export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface StoreValue {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  subtotal: number;
  itemCount: number;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  inWishlist: (id: string) => boolean;
}

const CartContext = createContext<StoreValue | undefined>(undefined);

const CART_KEY = "eptiver_cart_v2";
const WISH_KEY = "eptiver_wishlist_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_KEY);
      if (raw) setItems(JSON.parse(raw));
      const w = window.localStorage.getItem(WISH_KEY);
      if (w) setWishlist(JSON.parse(w));
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items));
      window.localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
    } catch {
      // ignore storage errors
    }
  }, [items, wishlist, hydrated]);

  const addItem = useCallback((product: Product, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i));
      }
      return [
        ...prev,
        { id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image, quantity },
      ];
    });
    setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0 ? prev.filter((i) => i.id !== id) : prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);
  const inWishlist = useCallback((id: string) => wishlist.includes(id), [wishlist]);

  const subtotal = useMemo(() => items.reduce((s, i) => s + i.price * i.quantity, 0), [items]);
  const itemCount = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);

  const value: StoreValue = {
    items, addItem, removeItem, updateQuantity, clearCart,
    isDrawerOpen, openDrawer, closeDrawer, subtotal, itemCount,
    wishlist, toggleWishlist, inWishlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): StoreValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
