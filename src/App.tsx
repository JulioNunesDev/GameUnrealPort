import gsap from "gsap";
import { useRef, useLayoutEffect, RefObject } from "react";
import Iframe3D from "./Iframes3D/Iframe3D";
import Julio from "./assets/Videos/Julio.mp4";


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
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "var(--color-night)",
          width: "100%",
          height: "100vh",
        }}
      >
        <Iframe3D />
      </div>

      <video width={500} height={500} src={Julio} autoPlay controls>
        <source type="video/mp4" />
        seu navegador nao suporta esse video
      </video>
    </div>

  
  );
}

export default App;
