// import { render, screen, fireEvent, act } from "@testing-library/react";
// import { describe, expect, it, vi } from "vitest";
// import { OptionsProvider } from "../context/optionsContext";
// import { Score } from "./Score";
// import ChooseAndPlay from "./ChooseAndPlay";


// describe('Score', () => {
//     it('should display 2 second on the screen after we wait 1 second', () => {
//         vi.useFakeTimers()
        
        
//         render(
//             <OptionsProvider>
//                 <Score />
//                 <ChooseAndPlay />
//             </OptionsProvider>
//         )

//         const hand = screen.getByText(/paper/i)
//         expect(hand).toBeInTheDocument()

//         fireEvent.click(hand)
//         fireEvent.click(screen.getByText('play') )

//         act(()=>{
//             vi.advanceTimersByTime(1000)
//         } )

//         screen.debug()

//         expect(screen.getByTestId("timer") ).toHaveTextContent('2')


//     } )


//     it('should display 2 second on the screen after we wait 1 second', () => {
//         vi.useFakeTimers()
        
        
//         render(
//             <OptionsProvider>
//                 <Score />
//                 <ChooseAndPlay />
//             </OptionsProvider>
//         )

//         const hand = screen.getByText(/paper/i)
//         expect(hand).toBeInTheDocument()

//         fireEvent.click(hand)
//         fireEvent.click(screen.getByText('play') )

//         act(()=>{
//             vi.advanceTimersByTime(2000)
//         } )

//         screen.debug()

//         expect(screen.getByTestId("timer") ).toHaveTextContent('1')


//     } )
// } )




