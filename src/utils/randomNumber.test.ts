import { describe, expect, it } from "vitest";
import { generateComputerHand } from "./randomNumber";



describe('Random Number', () => {
    it('should create a random number', () => {
        const randNumber = generateComputerHand()

        expect(randNumber).toBeLessThanOrEqual(2)
        expect(randNumber).toBeGreaterThanOrEqual(0)
        
    } )
} )

