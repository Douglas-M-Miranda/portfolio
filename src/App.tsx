import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.scss'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
