import DemonRed from "../../components/AskDemons/DemonRed";
import DemonWhite from "../../components/AskDemons/DemonWhite";
import { AppPlayerGameDemon } from "../../context/usePlayMusic";


export default function GameDemon() {
  //logica entre telas

  return (
    <AppPlayerGameDemon>
      <DemonRed />
      <DemonWhite />
    </AppPlayerGameDemon>
 
  );
}
