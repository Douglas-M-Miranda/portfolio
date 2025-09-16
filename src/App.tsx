import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.scss'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projets from './pages/projects/Projects'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/projetos' element={<Projets />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
