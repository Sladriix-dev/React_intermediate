import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Freelances from './pages/Freelances/Freelances'
import Results from './pages/Results/Results'
import Survey from './pages/Survey/Survey'
import Header from './components/Header/Header'
import Error from './components/Error/Error'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />
        <Route path="/survey" element={<Survey />}>
            <Route path="/survey/:questionNumber" element={<Survey />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}
