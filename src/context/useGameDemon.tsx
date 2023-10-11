import {createContext, useState} from 'react';
import GameDemon from '../layout/logic/GameDemon';



type TAnswers = string[];

type TGameContext = {
answer: TAnswers
setAnswerName: React.Dispatch<React.SetStateAction<TAnswers>>;
}


// eslint-disable-next-line react-refresh/only-export-components
export const useContextGame = createContext<TGameContext | undefined>({} as TGameContext)



export const AppProviderGameDemon = ()=>{
    const [answer, setAnswerName] = useState<TAnswers>([])

    
const initializeContext: TGameContext= {
    answer,
    setAnswerName,
    }

    return (
        <useContextGame.Provider value={initializeContext}>
            <GameDemon />
        </useContextGame.Provider>
        )

}

