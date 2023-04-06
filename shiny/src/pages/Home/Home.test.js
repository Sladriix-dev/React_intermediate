import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Home from './Home'
import { ThemeProvider } from '../../utils/context'

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    )
    // expect(screen.getByText(
    //     "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents"
    // )).toBeTruthy()
    expect(
      screen.getByRole('heading', {
        level: 2,
        text: "Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents",
      })
    ).toBeTruthy()
    // screen.debug() permet de retrouver un élément rapidement
    // Pour tester un hook le meilleur moyen est de tester un component qui use ce hook
  })
})
