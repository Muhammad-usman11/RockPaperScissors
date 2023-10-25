import React, { useState } from "react"
import { OptionActionKind } from "../reducers/scoreReducerTypes"
import { useOptions } from "../context/optionsContext"
interface Props{
    name: string,
    icon: JSX.Element,
    handChoiceIndex: number,
}

const Handselector: React.FC<Props> = ({name, icon, handChoiceIndex }) => {
  const optionContext = useOptions()
  const {dispatch, state } = optionContext
  const [handPressed, setHandPressed ] = useState<boolean>(false)
  const selectedHandIndex = state.playerHand


  const selectOption = (index: number ) => {
    dispatch({type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: index } )
    setHandPressed(true)
  }
  console.log(state);
  


  return (
    <>
    <button onClick={()=> selectOption(handChoiceIndex ) } className={` handbtn ${handPressed && handChoiceIndex === selectedHandIndex ? `activebtn` : ''}   `} >
        <h4 className="text">{name}</h4> 
        <div>{icon} </div>
       
    </button>
    
    
    </>
  )
}

export default Handselector