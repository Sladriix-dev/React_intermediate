import Footer from './Footer'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Footer', () => {
  it('Should change the theme', async () => {
    render(
        <ThemeProvider>
            <Footer />
        </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    // Dans la pluspart des cas getByRole fonctionne, on peut également lui passer des params pour etre plus précis 
    // Mais dans le cas ou on ne peut pas -> passer data-testid à mon composant et use le selecteur getByTestId
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
