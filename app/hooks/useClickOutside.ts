import { useEffect, useRef } from 'react';

export function useClickOutside(handler: Function) {
  const ref = useRef<null | HTMLElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return ref;
}
