'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [visibleChars, setVisibleChars] = useState(0);
  const name = 'Prajjwal Parajuli';

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleChars(name.length);
      const timer = window.setTimeout(() => setShowSplash(false), 800);
      return () => window.clearTimeout(timer);
    }

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleChars(index);
      if (index >= name.length) {
        window.clearInterval(interval);
        window.setTimeout(() => setShowSplash(false), 900);
      }
    }, 90);

    return () => window.clearInterval(interval);
  }, [name.length]);

  if (!showSplash) {
    return null;
  }

  return (
    <div className="splash-screen" role="status" aria-live="polite">
      <div className="splash-inner">
        <div className="splash-title">
          <span className="splash-typed">{name.slice(0, visibleChars)}</span>
          <span className="typewriter-caret" aria-hidden="true">|</span>
        </div>
        <button
          className="splash-skip"
          onClick={() => setShowSplash(false)}
          aria-label="Skip splash screen"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
