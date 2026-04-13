import React, { useEffect, useRef } from 'react';

const PALETTE = [
  '#E07A5F', // terracotta
  '#D4956A', // sandy orange
  '#C4875A', // warm sienna
  '#E8B49A', // peach
  '#B5654A', // burnt sienna
  '#D4A876', // warm gold
  '#A07850', // warm brown
];

const FADE_RATE = 0.018;
const FADE_IDLE_MS = 3500;

export default function PaintCanvas() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    const ctx = canvas.getContext('2d');

    let colorIdx = 0;
    let points = [];
    let lastMoveTime = 0;
    let lastDrawTime = 0;
    let fadeRafId = null;
    let drawRafId = null;
    let pendingMove = null;

    const nextColor = () => {
      colorIdx = (colorIdx + 1) % PALETTE.length;
      const dot = cursor.querySelector('[data-dot]');
      if (dot) dot.setAttribute('fill', PALETTE[colorIdx]);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const fade = () => {
      if (Date.now() - lastDrawTime > FADE_IDLE_MS) {
        fadeRafId = null;
        return;
      }
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha = FADE_RATE;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
      fadeRafId = requestAnimationFrame(fade);
    };

    const startFadeIfNeeded = () => {
      if (!fadeRafId) fadeRafId = requestAnimationFrame(fade);
    };

    const drawStroke = (x, y, now) => {
      if (now - lastMoveTime > 150) {
        points = [];
        nextColor();
      }
      lastMoveTime = now;

      if (points.length > 0) {
        const last = points[points.length - 1];
        if (Math.hypot(x - last.x, y - last.y) < 3) return;
      }

      points.push({ x, y });
      if (points.length < 3) return;

      const len = points.length;
      const p0 = points[len - 3];
      const p1 = points[len - 2];
      const p2 = points[len - 1];
      const mid1 = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
      const mid2 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };

      ctx.globalCompositeOperation = 'source-over';
      ctx.beginPath();
      ctx.moveTo(mid1.x, mid1.y);
      ctx.quadraticCurveTo(p1.x, p1.y, mid2.x, mid2.y);
      ctx.strokeStyle = PALETTE[colorIdx];
      ctx.lineWidth = 5 + Math.random() * 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = 0.65;
      ctx.stroke();

      lastDrawTime = Date.now();
      startFadeIfNeeded();
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Cursor: transform bypasses layout — no reflow, compositor-only update
      cursor.style.transform = `translate(${x - 30}px, ${y - 30}px)`;

      // Canvas draw: throttled to one per animation frame
      pendingMove = { x, y, now: Date.now() };
      if (!drawRafId) {
        drawRafId = requestAnimationFrame(() => {
          drawRafId = null;
          if (pendingMove) {
            drawStroke(pendingMove.x, pendingMove.y, pendingMove.now);
            pendingMove = null;
          }
        });
      }
    };

    const handleMouseEnter = () => {
      cursor.style.display = 'block';
      points = [];
      nextColor();
    };

    const handleMouseLeave = () => {
      cursor.style.display = 'none';
      points = [];
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(fadeRafId);
      cancelAnimationFrame(drawRafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
        }}
      />
      {/* Cursor: top/left fixed at 0,0 — position driven entirely by transform */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'none',
          transform: 'translate(-100px, -100px)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" overflow="visible">
          <line x1="4" y1="4" x2="20" y2="20" stroke="#8B5E3C" strokeWidth="5" strokeLinecap="round"/>
          <line x1="18" y1="18" x2="23" y2="23" stroke="#C8C8C8" strokeWidth="7" strokeLinecap="butt"/>
          <line x1="22" y1="22" x2="30" y2="30" stroke="#2C1810" strokeWidth="3" strokeLinecap="round"/>
          <circle data-dot="true" cx="30" cy="30" r="2.5" fill={PALETTE[0]}/>
        </svg>
      </div>
    </>
  );
}
