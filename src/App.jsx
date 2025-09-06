import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Work from './pages/Work/Work.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Contact from './pages/Contact/Contact.jsx'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
