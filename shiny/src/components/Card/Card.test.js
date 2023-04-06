import Card from "./Card";
import { fireEvent, render, screen } from "@testing-library/react"
import { ThemeProvider } from "../../utils/context";

describe('Card component', () => {
    it('should render title with image', async () => {
        render(
            <ThemeProvider>
                <Card 
                    title="Harry Potter"
                    label="Magicien frontend"
                    picture="/myPicture.png"
                />
            </ThemeProvider>
            )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText("Harry Potter")
        expect(cardPicture.src).toBe('http://localhost/myPicture.png')
        expect(cardTitle.textContent).toBe(' Harry Potter ')
    })

    it('should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card 
                    title="Harry Potter"
                    label="Magicien frontend"
                    picture="/myPicture.png"
                />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText(/Harry/i)
        // eslint-disable-next-line testing-library/no-node-access
        const parentNode = cardTitle.closest('div')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
    })
})