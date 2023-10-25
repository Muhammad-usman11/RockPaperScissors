// import { describe, expect, it, vi } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { useOptions, OptionsProvider } from "./optionsContext";


// vi.mock("./initialStateValue", () => {
//     return {
//       initialState: {
//         playerHand: 1,
//         computerHand: 2,
//         runTimer: false,
//         score: {
//           player: 0,
//           computer: 0,
//         },
//         results: {
//           winner: "Player 1",
//           message: "",
//         },
//       },
//     };
// });

// const TestingComponent = () => {
//     const optionContext = useOptions()
//     return(
//     <>
//     <p>Playerhand :{optionContext.state.playerHand } </p>
//     <p>Computerhand : {optionContext.state.computerHand } </p>
//     <p>Winner : {optionContext.state.results.winner } </p>
//     </>
//     )
// }




// describe('Options Context', () => {
//     it('should render the component with the context initial values', () =>{
       
        
//         render(
//             <OptionsProvider>
//                 <TestingComponent />
//             </OptionsProvider>
//         )
//         expect(screen.getByText(/Playerhand: 1/i ) ).toBeInTheDocument()
//         expect(screen.getByText(/Computerhand: 2/i ) ).toBeInTheDocument()
//         expect(screen.getByText(/Winner: Player 1/i ) ).toBeInTheDocument()
        
//         }
     

//     )


    
// }

// )

