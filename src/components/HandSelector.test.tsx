import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Handselector from "./Handselector";
import {  FaHandPaper } from "react-icons/fa";
import userEvent from '@testing-library/user-event'
import { OptionsProvider } from "../context/optionsContext";


vi.mock('../src/index.css', () => {
    return{
        default:{
            handbtn:'handbtn',
            activebtn: 'activebtn',
        },
    }
} )


describe('Hand Selector', () => {
    it('should render the hand selector with right props', () =>{
        render(
            <Handselector 
                name="paper"
                icon={<FaHandPaper data-testid="paper" /> } 
                handChoiceIndex={2}

            />
        )
        const hand = screen.getByText(/paper/i )
        const icon = screen.getByTestId('paper')
        expect(hand).toBeInTheDocument()
        expect(icon).toBeVisible()
        }

    )


    it('should render the hand selector with right props', async () =>{
        const user = userEvent.setup()
        
        render(
            <OptionsProvider> 
            <Handselector 
                name="paper"
                icon={<FaHandPaper data-testid="paper" /> } 
                handChoiceIndex={2}

            />
            </OptionsProvider>
        )
        const hand = screen.getByText(/paper/i )
        await user.click(hand)
        expect(hand).toHaveClass('activebtn')
       
        }

    )
}

)

