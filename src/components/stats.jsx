"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function formatNumber(value, compact = true) {
  try {
    return new Intl.NumberFormat(undefined, {
      notation: compact ? "compact" : "standard",
      maximumFractionDigits: compact ? 1 : 0,
    }).format(value);
  } catch {
    return String(value);
  }
}

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2, root: null, ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

function useCountUp(target, { duration = 900, start = 0, run = true } = {}) {
  const [val, setVal] = useState(run ? start : target);
  const raf = useRef(null);

  useEffect(() => {
    if (!run) {
      setVal(target);
      return;
    }
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(start + (target - start) * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration, start, run]);

  return Math.round(val);
}

export default function Stats({
  countries = 249,
  clients = 12800,
  exported = 12_500_000,
  compact = true,
  animate = true,
}) {
  const { ref, inView } = useInView();
  const run = animate && inView;

  const c = useCountUp(countries, { run });
  const u = useCountUp(clients, { run });
  const e = useCountUp(exported, { run });

  const stats = useMemo(
    () => [
      { value: formatNumber(c, compact), label: "Countries" },
      { value: formatNumber(u, compact), label: "Clients served" },
      { value: `${formatNumber(e, compact)}`, label: "Rows of data exported" },
    ],
    [c, u, e, compact]
  );

  return (
    <section
      ref={ref}
      className="relative mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center bg-white/80 border-y border-light/50"
    >
      {stats.map((s) => (
        <div key={s.label}>
          <p
            className="text-4xl font-extrabold"
            aria-label={s.value}
          >
            {s.value}
          </p>
          <p className="mt-2 text-sm font-semibold text-lightgray tracking-wider">
            {s.label}
          </p>
        </div>
      ))}
    </section>
  );
}
