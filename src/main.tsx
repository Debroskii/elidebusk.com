import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route } from 'react-router'
import SiteRoutes from './routes'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <SiteRoutes/>
    </StrictMode>
  </BrowserRouter>,
)

export function checkMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

useEffect(() => {
  const media = window.matchMedia(query);
  
  // Set the initial value
  if (media.matches !== matches) {
    setMatches(media.matches);
  }

  // Set up a listener for screen size changes
  const listener = () => setMatches(media.matches);
  media.addEventListener('change', listener);
  
  // Clean up the listener when the component unmounts
  return () => media.removeEventListener('change', listener);
}, [matches, query]);

return matches;
}