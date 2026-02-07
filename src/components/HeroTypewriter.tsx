'use client';

import { useEffect, useState } from 'react';

export default function HeroTypewriter() {
  const [nameCount, setNameCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);
  const name = 'Prajjwal Parajuli';
  const line = 'builds products and growth systems that convert.';

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setNameCount(name.length);
      setLineCount(line.length);
      return;
    }

    let nameIndex = 0;
    const nameInterval = window.setInterval(() => {
      nameIndex += 1;
      setNameCount(nameIndex);
      if (nameIndex >= name.length) {
        window.clearInterval(nameInterval);
        let lineIndex = 0;
        const lineInterval = window.setInterval(() => {
          lineIndex += 1;
          setLineCount(lineIndex);
          if (lineIndex >= line.length) {
            window.clearInterval(lineInterval);
          }
        }, 45);
      }
    }, 70);

    return () => window.clearInterval(nameInterval);
  }, [name.length, line.length]);

  return (
    <h1 className="hero-title">
      <span className="hero-name">
        {name.slice(0, nameCount)}
        <span className="typewriter-caret" aria-hidden="true">|</span>
      </span>
      <span className="hero-line">{line.slice(0, lineCount)}</span>
    </h1>
  );
}
