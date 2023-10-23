import {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'




type TAnswers = string;

type TGameContext = {
answer: TAnswers
setAnswerName: React.Dispatch<React.SetStateAction<TAnswers>>;
verificationAnswer: (newState: number) => void;
}

type Tchildren ={
    children:  React.ReactNode}


// eslint-disable-next-line react-refresh/only-export-components
export const useContextGame = createContext<TGameContext | undefined>({} as TGameContext)



export const AppProviderGameDemon = ({children}: Tchildren)=>{
    const [answer, setAnswerName] = useState<TAnswers>('')

    const navigate = useNavigate()

    function verificationAnswer(value: number){
        if(value === 1) {
            navigate('/sobre') 
            setAnswerName('true')
            return
        }
        else{
         navigate('/gamedemons') 
        }
        
    }

    
const initializeContext: TGameContext= {
    answer,
    setAnswerName,
    verificationAnswer,
    
    }

    return (
        <useContextGame.Provider value={initializeContext}>
            {children}
        </useContextGame.Provider>
        )

}

