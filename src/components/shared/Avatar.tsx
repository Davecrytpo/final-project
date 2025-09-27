interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Avatar({ src, alt, size = 'md' }: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  } as const;

  const dims = {
    sm: { w: 32, h: 32 },
    md: { w: 40, h: 40 },
    lg: { w: 48, h: 48 },
  } as const;

  return (
    <img
      src={src}
      alt={alt}
      width={dims[size].w}
      height={dims[size].h}
      loading="lazy"
      decoding="async"
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  );
}
