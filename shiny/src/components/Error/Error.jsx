import styled from "styled-components"
import colors from "../../utils/style/colors"
import errorImg from "../../assets/404.svg"

const ErrorWrapper = styled.div`
    margin: 30px;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundLight};
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-weight: 300;
`

const ErrorSubtitle = styled.h2`
    font-weight: 300;
    color: ${colors.primary}
`

const Illustration = styled.img`
    max-width: 800px;
`

export default function Error() {
    return (
        <ErrorWrapper>
            <ErrorTitle>Oups...</ErrorTitle>
            <Illustration src={errorImg} />
            <ErrorSubtitle>
                Il semblerait que la page que vous cherchez n'existe pas
            </ErrorSubtitle>
        </ErrorWrapper>
    )
}