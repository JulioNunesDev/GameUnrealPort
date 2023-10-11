import gsap from "gsap";
import { useRef, useLayoutEffect, RefObject } from "react";

function App() {
  const root: RefObject<HTMLDivElement> = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.timeline();
    // all your animations go in here...
    ctx.to(root.current, { rotation: "360", ease: "all Linear .2s" });
    ctx.from(root.current, { padding: 40 });
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundColor: "var(--color-night)",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1
        ref={root}
        style={{
          color: "var(--color-midnight)",
          fontSize: "var(--size-titleup)",
          fontFamily: "var(--font-Oxa)",
        }}
      >
        Site em Desenvolvimento! Libs: Presentes [ Green Sock, Three Js ]
      </h1>
      <a
        style={{
          color: "var(--color-midnight)",
          fontSize: "var(--size-title)",
          fontFamily: "var(--font-Oxa)",
        }}
        href="https://www.instagram.com/julionunesyt/"
        target="_blank"
      >
        Julio Nunes - <span>click Aqui!</span>
      </a>
    </div>
  );
}

export default App;
