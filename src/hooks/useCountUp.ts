import { useEffect, useState, useRef } from 'react';

/**
 * Animated counter that counts from 0 to `end` when `trigger` becomes true.
 * Uses an ease-out cubic curve so the last few digits feel satisfying.
 *
 * @param end      Target number (can be float, e.g. 94.6)
 * @param trigger  Start counting when true
 * @param duration Milliseconds for the full count (default 2000)
 * @param decimals Decimal places to show (default auto-detect from `end`)
 */
export function useCountUp(
  end: number,
  trigger: boolean,
  duration = 2000,
  decimals?: number
) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  const dp = decimals ?? (String(end).includes('.') ? String(end).split('.')[1].length : 0);

  useEffect(() => {
    if (!trigger) return;

    startRef.current = null;

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((eased * end).toFixed(dp)));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, end, duration, dp]);

  return value;
}
