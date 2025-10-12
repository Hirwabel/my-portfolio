import React, { useState, useEffect } from "react";
import './App.css'
import {Navbar} from './components/Navbar'
import {Hero}from './components/Hero'
import {Projects} from './components/Projects'
import {Contact} from './components/Contact'
import * as emailjs from "@emailjs/browser";
//import {emailjs} from "@emailjs/browser"

function App() {
  const[isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

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
