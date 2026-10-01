import { useEffect, useRef } from 'react';

export function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        progressRef.current?.style.setProperty('--scroll-progress', String(progress));
      });
    }

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}

export function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    function moveCursor(event) {
      const cursor = cursorRef.current;
      if (!cursor) return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.toggle('is-hovering', event.target instanceof Element && Boolean(event.target.closest('a, button')));
    }

    window.addEventListener('pointermove', moveCursor, { passive: true });
    return () => window.removeEventListener('pointermove', moveCursor);
  }, []);

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;
    if (!element) return undefined;
    element.classList.add('reveal-pending');

    if (!('IntersectionObserver' in window)) {
      element.classList.remove('reveal-pending');
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.classList.remove('reveal-pending');
      element.classList.add('reveal-visible');
      observer.disconnect();
    }, { threshold: 0.18 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={revealRef} className={`reveal ${className}`.trim()} style={{ '--reveal-delay': `${delay}s` }}>
      {children}
    </Tag>
  );
}