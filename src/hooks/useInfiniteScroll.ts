import { useEffect, useRef } from 'react';

interface Options {
  onIntersect: () => void;
  disabled?: boolean;
  rootMargin?: string;
}

export function useInfiniteScroll<T extends Element>({ onIntersect, disabled = false, rootMargin = '300px' }: Options) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onIntersect();
        });
      },
      { root: null, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onIntersect, disabled, rootMargin]);

  return ref;
}