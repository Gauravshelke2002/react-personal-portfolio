import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'


const App = () => {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Services/>
     <Projects/>
     <Contact/>
     
   
    </>
  )
}

export default App
