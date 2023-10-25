

import { ActionTypes, OptionActionKind } from "../reducers/scoreReducerTypes"


export const checkWinner = (dispatch: React.Dispatch<ActionTypes>, 
    playerHand : string, 
    computerHand : string
    ) => {
    if(playerHand === 'rock' && computerHand === 'rock' ){
        dispatch({type: OptionActionKind.DRAW, payload: 'We have a draw', })
    } else if(playerHand === 'rock' && computerHand === 'paper' ){
        dispatch({type: OptionActionKind.COPMPUTER_WINS, payload: 'Computer wins! Paper beats rock.', })
    } else if(playerHand === 'rock' && computerHand === 'scissors' ){
        dispatch({type: OptionActionKind.PLAYER_WINS, payload: 'Player wins! Rock beats scissors.', })
    }else if(playerHand === 'paper' && computerHand === 'rock' ){
        dispatch({type: OptionActionKind.PLAYER_WINS, payload: 'Player wins! Paper beats rock', })
    } else if(playerHand === 'paper' && computerHand === 'paper' ){
        dispatch({type: OptionActionKind.DRAW, payload: 'We have a draw.', })
    } else if(playerHand === 'paper' && computerHand === 'scissors' ){
        dispatch({type: OptionActionKind.COPMPUTER_WINS, payload: 'Computer wins! Scissors beats Paper .', })
    }else if(playerHand === 'scissors' && computerHand === 'rock' ){
        dispatch({type: OptionActionKind.COPMPUTER_WINS, payload: 'Computer wins! Rock beats Scissor', })
    } else if(playerHand === 'scissors' && computerHand === 'paper' ){
        dispatch({type: OptionActionKind.PLAYER_WINS, payload: 'Player wins! Scissor beats Paper.', })
    } else if(playerHand === 'scissors' && computerHand === 'scissors' ){
        dispatch({type: OptionActionKind.DRAW, payload: 'We have a draw.', })
    }

}