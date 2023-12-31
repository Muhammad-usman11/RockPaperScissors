// import { describe, expect, it, vi } from "vitest";
// import { render, screen } from "@testing-library/react";


// import { useEffect, useReducer } from "react";
// import { scoreReducer } from "./scoreReducer";
// import { initialState } from "../context/initialStateValue";
// import { ActionTypes, OptionActionKind } from "./scoreReducerTypes";




// vi.mock("../context/initialStateValue", () => {
//   return {
//     initialState: {
//       playerHand: 2,
//       computerHand: 0,
//       runTimer: false,
//       score: {
//         player: 0,
//         computer: 0,
//       },
//       results: {
//         winner: "",
//         message: "",
//       },
//     },
//   };
// });

// interface IProps{
//     myaction: ActionTypes;
// }

// const TestingComponent = (props: IProps ) => {
//   const [state, dispatch] = useReducer(scoreReducer, initialState);

//   useEffect(()=>{
//     dispatch(props.myaction )
//   },[] )
//   return (
//     <>
//       <p>playerhand: {state.playerHand } </p>
//       <p>computerhand: {state.computerHand } </p>
//     </>
//   );
// };

// describe("scoreReducer", () => {
//   it("should update the scoreReducer with the correct playerhand", () => {
//     render(<TestingComponent myaction={{type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }} />);

//     expect(screen.getByText(/playerhand: 0/)).toBeInTheDocument();
//   });


//   it("should update the scoreReducer with the correct computerhand", () => {
//     render(<TestingComponent myaction={{type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: 1 }} />);

//     expect(screen.getByText(/computerhand: 2/)).toBeInTheDocument();
//   });
// });
