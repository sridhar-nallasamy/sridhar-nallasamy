'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleDir: number;
  drift: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let COUNT = 180;
    const SPEED = 1;
    const MAX_R = 1.5;
    let stars: Star[] = [];
    let animId: number;
    let W = 0;
    let H = 0;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      if (!canvas) return;

      const { innerWidth, innerHeight } = window;
      W = canvas.width = innerWidth * dpr;
      H = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';

      if (innerWidth >= 1500) {
        COUNT = 250;
      }
    };

    const makeStar = (fromBottom = false): Star => ({
      x: Math.random() * W,
      y: fromBottom ? H + Math.random() * 40 : Math.random() * H,
      r: (Math.random() * MAX_R + 0.3) * dpr,
      speed: (Math.random() * SPEED + SPEED * 0.4) * dpr,
      alpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.015 + 0.004,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
      drift: (Math.random() - 0.5) * 0.25 * dpr,
    });

    const tick = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = '#333333';
      ctx.fillRect(0, 0, W, H);

      for (const s of stars) {
        // Move upward + slight horizontal drift
        s.y -= s.speed;
        s.x += s.drift;
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 0.9 || s.alpha <= 0.15) s.twinkleDir *= -1;

        // Recycle stars that exit the top or sides
        if (s.y < -10 || s.x < -20 || s.x > W + 20) {
          Object.assign(s, makeStar(true));
          s.x = Math.random() * W;
        }

        // Fade in near the bottom edge so stars don't pop
        const fadeIn = Math.min(1, (H - s.y) / (H * 0.06));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha * fadeIn})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };

    resize();
    stars = Array.from({ length: COUNT }, () => makeStar(false));
    tick();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className='fixed inset-0 -z-10'>
      <canvas ref={canvasRef} className='absolute inset-0' />
    </div>
  );
}
