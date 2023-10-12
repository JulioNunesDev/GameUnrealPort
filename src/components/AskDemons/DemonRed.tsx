import { HiOutlinePause } from "react-icons/hi";

import S from "./styled";
import DemonReds from "../../assets/Arts/demonred.svg";
import DemonDialogOne from "../../assets/Arts/demoreddialogone.svg";
import usePlayerDemonHook from "../../hooks/usePlayerDemonContext";



type TDemon = {
  src: string;
  alt: string;
};
const Props1: TDemon = {
  src: `${DemonReds}`,
  alt: "Imagem Demon Red Do Game",
};
const Props2: TDemon = {
  src: `${DemonDialogOne}`,
  alt: "Imagem Demon Red Do Game",
};

function DemonRed() {
  const {stopMusic} = usePlayerDemonHook()
 
  return (
    <S.boxContainer>
      <S.content>
        <div className="playerComponent">
          <button onClick={stopMusic}>
            <HiOutlinePause />
          </button>
        </div>

        <img className="demonred" {...Props1} />
        <img className="dialog" {...Props2} />
      </S.content>
    </S.boxContainer>
  );
}

export default DemonRed;
