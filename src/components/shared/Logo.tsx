interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      aria-label="App Logo"
      role="img"
    >
      <rect width="64" height="64" rx="12" fill="currentColor" />
      <path
        d="M16 48L28.8 32 16 16h7.6L34 28.6 44.4 16H52l-12.8 16L52 48h-7.6L34 35.4 23.6 48H16z"
        fill="black"
      />
    </svg>
  );
}
