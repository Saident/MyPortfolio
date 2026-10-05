import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Adapted from Jhey's plus grid; native scrolling and links stay interactive.
const InteractiveGrid = () => {
  const gridRef = useRef(null);
  useLayoutEffect(() => {
    const grid = gridRef.current;
    let cells = [];
    let columns = 0;
    let rows = 0;
    let cellSize = 0;
    let frame = 0;
    let point = null;
    let active = new Set();
    const buildGrid = () => {
      gsap.killTweensOf(cells);
      active.clear();
      cellSize = window.innerWidth < 768 ? 44 : 56;
      columns = Math.ceil(window.innerWidth / cellSize);
      rows = Math.ceil(window.innerHeight / cellSize);
      grid.style.setProperty('--grid-size', `${cellSize}px`);
      grid.style.setProperty('--grid-cols', columns);
      const fragment = document.createDocumentFragment();
      cells = Array.from({ length: columns * rows }, (_, index) => {
        const cell = document.createElement('span');
        const seed = ((index * 9301 + 49297) % 233280) / 233280;
        cell.textContent = '+';
        cell.style.setProperty('--cell-hue', Math.floor(seed * 30));
        cell.dataset.grade = Math.floor(seed * 12 - 6);
        fragment.appendChild(cell);
        return cell;
      });
      grid.replaceChildren(fragment);
    };
    buildGrid();
    const observer = new ResizeObserver(buildGrid);
    observer.observe(grid);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const reset = (cell) => {
        gsap.to(cell, { opacity: 0, rotation: 0, scale: 1, color: '#777772', duration: 0.5, overwrite: true });
      };
      const paint = () => {
        frame = 0;
        if (!point || document.hidden) return;
        const next = new Set();
        const col = Math.floor(point.x / cellSize);
        const row = Math.floor(point.y / cellSize);
        for (let y = row - 1; y <= row + 1; y++) {
          for (let x = col - 1; x <= col + 1; x++) {
            if (x < 0 || x >= columns || y < 0 || y >= rows) continue;
            const cell = cells[y * columns + x];
            next.add(cell);
            if (!active.has(cell)) gsap.to(cell, {
              opacity: x === col && y === row ? 0.85 : 0.4,
              rotation: Number(cell.dataset.grade) * 90, scale: 1.5,
              color: `hsl(${cell.style.getPropertyValue('--cell-hue')} 65% 48%)`,
              duration: 0.18, overwrite: true,
            });
          }
        }
        active.forEach((cell) => { if (!next.has(cell)) reset(cell); });
        active = next;
      };
      const move = (event) => {
        point = { x: event.clientX, y: event.clientY };
        if (!frame) frame = requestAnimationFrame(paint);
      };
      const leave = () => {
        cancelAnimationFrame(frame);
        frame = 0;
        point = null;
        active.forEach(reset);
        active.clear();
      };
      const release = (event) => { if (event.pointerType !== 'mouse') leave(); };
      window.addEventListener('pointermove', move, { passive: true });
      window.addEventListener('pointerdown', move, { passive: true });
      window.addEventListener('pointerup', release, { passive: true });
      window.addEventListener('pointercancel', leave);
      document.documentElement.addEventListener('pointerleave', leave);
      window.addEventListener('blur', leave);
      document.addEventListener('visibilitychange', leave);
      return () => {
        cancelAnimationFrame(frame);
        frame = 0;
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerdown', move);
        window.removeEventListener('pointerup', release);
        window.removeEventListener('pointercancel', leave);
        document.documentElement.removeEventListener('pointerleave', leave);
        window.removeEventListener('blur', leave);
        document.removeEventListener('visibilitychange', leave);
        gsap.killTweensOf(cells);
        gsap.set(cells, { clearProps: 'transform,opacity,color' });
        active.clear();
      };
    });
    return () => {
      observer.disconnect();
      media.revert();
      gsap.killTweensOf(cells);
      grid.replaceChildren();
    };
  }, []);
  return <div className="interactive-grid" ref={gridRef} aria-hidden="true" />;
};

export default InteractiveGrid;
