import gsap from "gsap";
import { useRef, useLayoutEffect, RefObject } from "react";
import DemonRed from "./components/AskDemons/DemonRed";
import useDemonHook from "./hooks/useDemonContext";
import AppRoutes from "./routes/AppRoutes";
import { AppPlayerGameDemon } from "./context/usePlayMusic";

function App() {
  const root: RefObject<HTMLDivElement> = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.timeline();
    // all your animations go in here...
    ctx.to(root.current, { rotation: "360", ease: "all Linear .2s" });
    ctx.from(root.current, { padding: 40 });
  }, []);
  
  const {answer} = useDemonHook()
  if(answer == 'true'){
    return (
      <AppRoutes/>
      )
  }else{
    return (
      <AppPlayerGameDemon>
        
      <DemonRed/>
      </AppPlayerGameDemon>
      )
      
  }
}

export default App;
