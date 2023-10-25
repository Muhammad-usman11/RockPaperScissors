import { useEffect, useState } from "react"
import { useOptions } from "../context/optionsContext"
import { OptionActionKind } from "../reducers/scoreReducerTypes"
import { checkWinner } from "../utils/checkWinner"


export const Score = () => {
  const [timer, setTimer ] = useState<number>(3)
  const optionContext = useOptions()
  const {runTimer } = optionContext.state
  const {dispatch, options } = optionContext

  const playerHandIndex = optionContext.state.playerHand
  const playerHandName = optionContext.options[playerHandIndex].name
  const playerHandIcon = optionContext.options[playerHandIndex].icon
  const playerScore = optionContext.state.score.player

  const computerHandIndex = optionContext.state.computerHand
  const computerHandName = optionContext.options[computerHandIndex].name
  const computerHandIcon = optionContext.options[computerHandIndex].icon
  const computerScore = optionContext.state.score.computer

  const {winner, message } = optionContext.state.results


  useEffect(()=>{
    if(runTimer){
      const newInterValId = setInterval(()=>{
        setTimer((prevCount)=>{
          if(prevCount=== 1){
            clearInterval(newInterValId)
          }
          return prevCount -1
        } )
      }, 1000 )
    }
  },[runTimer] )

  useEffect(()=>{
    if(timer=== 0){
      setTimer(3)
      dispatch({type: OptionActionKind.RUN_TIMER, payload: false })
      checkWinner(dispatch, playerHandName, computerHandName )
    }
  },[timer])

  return (
    <>
    <div className="scoreparent">
        <div className="scoreplayer">
            <div className="scorebox"><h2>Score</h2> </div>
            <div className="countbox"><h2>Player: {playerScore} </h2> </div>
            <div className={`selectbox ${winner === 'Player' ? `winneranimation` : "" } `}>
              {runTimer && <div className="playerhandshake handshakemargin" >{options[0].icon} </div>}
              {!runTimer && winner && (
                <>
                <div className="iconmargin">{playerHandIcon } </div>
                <p>{playerHandName } </p>
                </>
              ) }
            </div>
        </div>
        <div className="counterbox">
          {runTimer && <p data-testid="timer" className="timertext">{timer} </p> }
          {!runTimer && winner && <p className="reswinner" >{winner } wins! </p> }
          {!runTimer && winner && <p className="resmessage">{message } </p> }
        </div>
        <div className="scorecomputer">
        <div className="scorebox"><h2>Score</h2> </div>
            <div className="countbox"><h2>Computer: {computerScore} </h2> </div>
            <div className= {`selectbox ${winner === 'Computer' ? `winneranimation` : "" } `}>
           {runTimer && <div className="computerhandshake handshakemargin">{options[0].icon} </div>}
            {!runTimer && winner && (
                <>
                <div className="iconmargin">{computerHandIcon } </div>
                <p>{computerHandName } </p>
                </>
              ) }
            </div>
        </div>
    </div>
    
    </>
  )
}
