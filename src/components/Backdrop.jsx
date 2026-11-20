import { useEffect, useRef } from "react";

// Aurora blobs + blueprint grid that lights up around the cursor (CSS vars, rAF-throttled).
const Backdrop = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let raf = 0, x = 0, y = 0;
    const apply = () => {
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
      raf = 0;
    };
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="bd" aria-hidden="true">
      <div className="bd-blob bd-a" />
      <div className="bd-blob bd-b" />
      <div className="bd-blob bd-c" />
      <div className="bd-grid" />
      <div className="bd-grid-lit" />
      <div className="bd-glow" />
      <div className="bd-vignette" />
    </div>
  );
};

export default Backdrop;
