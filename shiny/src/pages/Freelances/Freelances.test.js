import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from '../../utils/test'
import Freelances from './Freelances'

const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magcien fullstack',
        picture: '',
    },
]

const server = setupServer(
    // On Précise ici l'url qu'il faudra "intercepter"
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        // La on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({ freelancersList: freelancersMockedData}))
    })
)



// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les test sont finis
afterAll(() => server.close())

test('Should render without crash', async () => {
    render(<Freelances />)
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    // Le loader doit disparaitre du dom, on peut vérifier si c'est bien le cas
    await waitFor(() => {
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
        expect(screen.getByText('Harry Potter')).toBeTruthy()
    })
})


