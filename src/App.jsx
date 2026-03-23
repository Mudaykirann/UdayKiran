import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Work from './pages/Work/Work.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Contact from './pages/Contact/Contact.jsx'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

function AppContent() {
  const location = useLocation()

  return (
    <div className='App'>
      <Navbar />
      <main className='flex-grow'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <Routes location={location}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/work' element={<Work />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
