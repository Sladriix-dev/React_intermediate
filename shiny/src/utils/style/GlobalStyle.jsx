import { useContext } from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeContext } from "../context"

const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
    background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')} !important;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')} !important;
  }

  body {
    margin: 0;
  }
`

export default function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
    )
}