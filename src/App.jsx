
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import History from './pages/History'


function App() {

  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<LandingPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />


      </Routes>

      <Footer />


    </>
  )
}

export default App
