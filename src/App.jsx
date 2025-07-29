import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
