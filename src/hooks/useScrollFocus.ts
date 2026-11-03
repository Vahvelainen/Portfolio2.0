import { type RefObject, useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

/** Index of the child of `container` nearest the viewport centre, on mobile only. */
export function useScrollFocus(container: RefObject<HTMLElement | null>) {
  const [focused, setFocused] = useState<number | null>(null);

  useEffect(() => {
    const mobile = window.matchMedia(MOBILE_QUERY);
    let frame = 0;

    const measure = () => {
      frame = 0;
      const items = container.current?.children;
      if (!mobile.matches || !items?.length) return setFocused(null);
      setFocused(centredIndex(items));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    mobile.addEventListener("change", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mobile.removeEventListener("change", measure);
      cancelAnimationFrame(frame);
    };
  }, [container]);

  return focused;
}

function centredIndex(items: HTMLCollection) {
  const top = items[0].getBoundingClientRect().top;
  const bottom = items[items.length - 1].getBoundingClientRect().bottom;
  const progress = (window.innerHeight / 2 - top) / (bottom - top);
  const index = Math.round(progress * items.length);
  return index >= 0 && index < items.length ? index : null;
}
