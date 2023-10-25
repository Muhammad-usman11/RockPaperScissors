import React from "react";
import { ActionTypes } from "../reducers/scoreReducerTypes";

export enum HandOptions{
    rock = 'rock',
    paper = 'paper',
    scissors = 'scissors',
}

export interface IOptions{
    name: HandOptions;
    icon: JSX.Element;

}

export interface IoptionsContext{
    options: IOptions[];
    state: IInitialState
    dispatch: React.Dispatch<ActionTypes > 
}
export interface Props{
    children: React.ReactNode;
}

export interface IInitialState{
    playerHand:number,
    computerHand:number,
    runTimer:boolean,
    score:IScore,
    results:IResults
}

interface IScore{
    player:number,
    computer:number,
}

interface IResults{
    winner:string,
    message:string,
}




