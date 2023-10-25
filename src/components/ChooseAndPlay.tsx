import Handselector from "./Handselector";
// import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useOptions } from "../context/optionsContext";
import { generateComputerHand } from "../utils/randomNumber";
import { OptionActionKind } from "../reducers/scoreReducerTypes";

const ChooseAndPlay = () => {
  const optionsContext = useOptions();
  // console.log(optionsContext.state);
  const {dispatch } = optionsContext

  const handOptionsArray = optionsContext.options.map((hand, i) => {
    return (
      <Handselector name={hand.name} icon={hand.icon} handChoiceIndex={i} />
    );
  });

  const play = () => {
    const randNum = generateComputerHand()
    // console.log('computer random number :', randNum );
    dispatch({type:OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: randNum })
    dispatch({type:OptionActionKind.RUN_TIMER, payload: true } )
  }

  return (
    <>
      <div className="slectoricons">
        {handOptionsArray}

        {/* <Handselector name="Rock" icon={<FaHandRock size={50} /> }  />
      <Handselector name="Paper" icon={<FaHandPaper size={50}/>} />
      <Handselector name="Scissor" icon={<FaHandScissors size={50}/>} /> */}
      </div>

      <div className="playbtn">
        <button onClick={play} >PLAY</button>
      </div>
    </>
  );
};

export default ChooseAndPlay;
