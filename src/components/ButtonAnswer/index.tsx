import useDemonHook from "../../hooks/useDemonContext";

function ButtonAnswer() {


 const {verificationAnswer} = useDemonHook()
  return (
    <>
      <button onClick={()=>verificationAnswer(1)}>Continuar</button>
      <button onClick={()=>verificationAnswer(2)}>Cancelar</button>
    </>
  );
}

export default ButtonAnswer;
