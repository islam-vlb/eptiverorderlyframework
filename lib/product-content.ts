import { FAQItem } from "@/components/FAQ";

export interface ProductContent {
  descriptionParagraphs: string[];
  whatsIncluded: string[];
  specifications: { label: string; value: string }[];
  faq: FAQItem[];
}

export const PRODUCT_CONTENT: Record<string, ProductContent> = {
  "food-sensitivity-test-kit": {
    descriptionParagraphs: [
      "The Food Sensitivity Test Kit is an at-home kit that gives you a simple, general overview using a quick finger-prick sample and an included test card that you read yourself. The card develops a color pattern you compare against the printed guide. Nothing is sent away, and there is no online setup — you read your own result at home.",
      "The kit is designed to be low-friction: collect a small sample with the included lancet, apply it to the card as directed, wait the stated time, and read the result against the reference key. It is a general wellness overview, not a medical test, and it does not diagnose any condition.",
      "Inside the box you receive the test card, single-use lancets, a sample applicator, a reference key, and a quick start guide. Everything you need for one reading is included in each kit.",
      "This kit is a general wellness tool for informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any health concerns, including food reactions.",
    ],
    whatsIncluded: [
      "1 food-sensitivity test card per kit",
      "Single-use lancets for the finger-prick sample",
      "1 sample applicator",
      "1 printed reference key for reading the card",
      "1 quick start guide",
      "Result read by you at home against the reference key",
    ],
    specifications: [
      { label: "Contents", value: "1 test card, single-use lancets, 1 applicator, 1 reference key, 1 quick start guide" },
      { label: "Format", value: "At-home color-read test card" },
      { label: "Sample", value: "A quick finger-prick sample applied to the card" },
      { label: "Reading Method", value: "Self-read at home against the printed reference key — nothing sent away, no online setup" },
      { label: "Read Time", value: "See the quick start guide for the exact development time" },
      { label: "Storage", value: "Keep the sealed kit at room temperature, away from moisture and direct sunlight" },
    ],
    faq: [
      { question: "Is this kit diagnostic?", answer: "No. The Food Sensitivity Test Kit is for general wellness and informational purposes only. It does not diagnose, treat, or monitor any medical condition." },
      { question: "How do I get my result?", answer: "You read it yourself at home. Apply a quick finger-prick sample to the included card, wait the stated time, and compare the color pattern against the printed reference key. Nothing is sent away, and there is no online step of any kind." },
      { question: "How private is this?", answer: "Your result stays on the card, with you. No online setup is required. Our Privacy Policy explains the limited information collected when you place an order." },
      { question: "What's the refund policy?", answer: "You may request a refund within 30 days from the date your order is received. Our Refund Policy page lists the full step-by-step process and the return address." },
      { question: "How do I contact support?", answer: "By phone or email — both are on our Contact page and in the footer of every page." },
      { question: "Can I buy more than one kit?", answer: "Yes. Each kit contains everything for one reading, and multiple-kit options are available on this page, some bundled with the Digestive Wellness Drink Mix." },
    ],
  },
  "digestive-wellness-drink-mix": {
    descriptionParagraphs: [
      "Digestive Wellness Drink Mix is a mild ginger-citrus powder in single-serve sachets that provides supplemental support for your normal digestive-wellness routine. Stir one sachet into water as part of your usual routine.",
      "Each sachet combines digestive enzymes and botanical extracts, including papain, betaine HCl, dandelion root, and gentian root, with zinc carnosine and vitamin B6. The full ingredient list and amounts per serving are shown on the Ingredients page and on the box.",
      "Sachets are sold in boxes of 10, 20, 30, and 40, and in multi-box value offers. Every quantity is shown with both its box count and its total sachet count so you always know exactly how many servings you are ordering.",
      "This is a dietary supplement for daily nutritional support. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    ],
    whatsIncluded: [
      "Single-serve digestive wellness drink mix sachets",
      "Papain enzyme, betaine HCl, dandelion root extract, gentian root extract, zinc carnosine, and vitamin B6 per serving",
      "Available in 10, 20, 30, and 40 sachet boxes",
      "Multi-box value offers with box and total sachet counts labeled",
      "Full Supplement Facts printed on every box",
      "Mild ginger-citrus flavor, no artificial colors added",
    ],
    specifications: [
      { label: "Format", value: "Powder drink mix, single-serve sachets" },
      { label: "Flavor", value: "Mild ginger-citrus" },
      { label: "Serving Size", value: "1 sachet — see Supplement Facts on the box" },
      { label: "Box Sizes", value: "10, 20, 30, 40 sachets" },
      { label: "Use", value: "Provides supplemental support for a normal digestive-wellness routine" },
      { label: "Storage", value: "Keep sachets in a cool, dry place away from direct sunlight" },
    ],
    faq: [
      { question: "How do I use the drink mix?", answer: "Follow the directions on the box. Stir one sachet into water as part of your normal daily routine. It provides supplemental nutritional support." },
      { question: "Does this diagnose or treat anything?", answer: "No. It is a dietary supplement that provides daily nutritional support. These statements have not been evaluated by the Food and Drug Administration, and this product is not intended to diagnose, treat, cure, or prevent any disease." },
      { question: "What is in it?", answer: "Papain enzyme, betaine HCl, dandelion root extract, gentian root extract, zinc carnosine, and vitamin B6. The Ingredients page lists the amount of each per serving." },
      { question: "Should anyone avoid it?", answer: "Consult your physician before beginning any new supplement, especially if you are pregnant, nursing, have a medical condition, or are taking medication." },
      { question: "What do the multi-box offers include?", answer: "Each value offer lists both the box count and the total sachet count — for example, 3 Boxes — 20 Sachets each / 60 total." },
      { question: "What's the refund policy?", answer: "You may request a refund within 30 days from the date your order is received. See the Refund Policy page for the full process and return address." },
    ],
  },
};
