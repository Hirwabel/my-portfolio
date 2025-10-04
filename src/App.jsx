import React, { useState, useEffect } from "react";
import './App.css'
import {Navbar} from './components/Navbar'
import {Hero}from './components/Hero'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'

function App() {
  const[isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true);

  }, [])
 

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>  
     <Navbar />

     <Hero />
     <Projects />
     <Contact />

     <>
       <p>&copy; 2025 Abel Hirwa. All rights reserved. </p>
     </>
    </div>
  );   
}  

export default App
