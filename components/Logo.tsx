export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="30" height="30" rx="6" fill="#3A2A1E" />
      <circle cx="16" cy="16" r="9" fill="none" stroke="#C1662F" strokeWidth="1.6" />
      <path d="M16 7 L16 25 M7 16 L25 16" stroke="#DB9366" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="2.4" fill="#C1662F" />
    </svg>
  );
}
