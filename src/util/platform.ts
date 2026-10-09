import { useEffect, useState } from "react";

export function useSafeMediaQuery(query: string) {
  const [matches, setMatches] = useState(false); // Default to false for SSR

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}