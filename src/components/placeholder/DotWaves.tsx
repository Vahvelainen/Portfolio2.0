import { useEffect, useRef } from "react";

const GAP = 22;
const MAX_SIZE = 7;

function waveAt(x: number, y: number, t: number) {
  const swell = Math.sin(x * 0.011 - y * 0.004 + t * 0.9);
  const chop = Math.sin(x * 0.004 + y * 0.013 - t * 0.6);
  return (swell * 0.65 + chop * 0.35 + 1) / 2;
}

function clearing(x: number, y: number, w: number, h: number) {
  const dx = (x - w / 2) / (w * 0.42);
  const dy = (y - h / 2) / (h * 0.32);
  const d = Math.min(1, Math.sqrt(dx * dx + dy * dy));
  return d * d * (3 - 2 * d);
}

function draw(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, color: string) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = color;
  for (let y = GAP / 2; y < h; y += GAP) {
    for (let x = GAP / 2; x < w; x += GAP) {
      const size = MAX_SIZE * waveAt(x, y, t) * (0.25 + 0.75 * clearing(x, y, w, h));
      if (size < 0.6) continue;
      ctx.fillRect(x - size / 2, y - size / 2, size, size);
    }
  }
}

/** Full-bleed canvas of square dots that swell and shrink in rolling waves. */
export function DotWaves() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const color = getComputedStyle(canvas).color;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let frame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(ctx, w, h, performance.now() / 1000, color);
    };
    const tick = (now: number) => {
      draw(ctx, w, h, now / 1000, color);
      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!still) frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full text-ink/20"
    />
  );
}
