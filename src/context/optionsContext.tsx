import { createContext, useContext, useReducer } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import {IoptionsContext, HandOptions, IOptions, Props } from './optionsContextTypes'
import { initialState } from "./initialStateValue";
import { scoreReducer } from "../reducers/scoreReducer";

const options: IOptions[] = [
    {name:HandOptions.rock, icon: <FaHandRock size={50} /> },
    {name:HandOptions.paper, icon: <FaHandPaper size={50}/> },
    {name:HandOptions.scissors, icon: <FaHandScissors size={50}/> },
];


const OptionsContext = createContext<IoptionsContext> ({
    options:[],
    state: initialState,
    dispatch: () => {},
})

export function OptionsProvider(props: Props ){
    const [state, dispatch ] = useReducer(scoreReducer, initialState);
    const contextValue = {
        // options: options
        options,
        state,
        dispatch,
    }; 
    return <OptionsContext.Provider value={contextValue} >{props.children } </OptionsContext.Provider>
}

export function useOptions(){
    const context = useContext(OptionsContext)
    return context;
}





