import { Link } from "react-router-dom"
import styled from "styled-components"
import { StyledLink } from "../../utils/style/Atoms"
import { ThemeContext } from "../../utils/context"
import DarkLogo from "../../assets/dark-logo.png"
import LightLogo from "../../assets/light-logo.png"
import { useContext } from "react"

const HomeLogo = styled.img`
    height: 70px;
`

const NavContainer = styled.nav`
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
            </Link>
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </div>
        </NavContainer>
    )
}