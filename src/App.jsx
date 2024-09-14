import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ApiRickAndMorty from './pages/ApiRickAndMorty'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rick-and-morty' element={<ApiRickAndMorty />} />
      </Routes>
      <Footer />
    </>
  )
}