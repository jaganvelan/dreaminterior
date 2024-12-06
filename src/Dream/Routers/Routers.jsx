import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

const Routers = () => {
  return (
    <div>
        <Router>
          <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Services' element={<Services/>}/>
                <Route path='/Gallery' element={<Gallery/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
            <Footer />
        </Router> 
    </div>
  )
}

export default Routers

