import {motion} from "framer-motion"
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter"

const fadeInUp = {
  initial: { opacity: 0, y: 20},
  animate: { opacity: 1, y: 0},
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {

    return (
      <motion.section
        id="home" 
        className='hero' 
        initial={{opacity: 0}} 
        animate={{opacity: 1}}
        transition={{duration:0.8, delay:0.2}}
      >
        < div className="hero-container">
          <motion.div 
            className="hero-content" 
            variants={staggerContainer} 
            initial="initial" 
            animate="animate">
            <motion.div className="hero-badge">
                <span>👋 Hello, I'm </span>
            </motion.div>
            <motion.h1 className="glitch" variants={fadeInUp} whileHover={{scale: 1.02}}>
              AbelDev
            </motion.h1>
            <motion.h2 className="hero-subtitle" variants={fadeInUp}>Creative developer & Designer</motion.h2>
            <motion.p className="hero-description" variants={fadeInUp}>
              I design and build modern, responsive websites using React, WordPress, and Tailwind CSS.
              My focus is on creating fast, elegant, and user-friendly digital experiences.
              From concept to deployment, I turn ideas into functional, visually stunning websites.
            </motion.p>

            <motion.div 
              className="cta-buttons" 
              variants={staggerContainer}
            >
              <motion.a 
                href="#projects" 
                className="cta-primary" 
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.95}}
              > View My Work
              </motion.a>

            </motion.div>
             <motion.div 
              className="cta-buttons" 
              variants={staggerContainer}
            >
              <motion.a 
                href="#contacts" 
                className="cta-secondary"
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.95}}
              >
                Contact Me
              </motion.a>

            </motion.div>

            <motion.div 
              className="social-links" 
              variants={staggerContainer}
            > 
              <motion.a href="https://github.com" target="_blank"> 
                <i className="fab fa-github"></i>
              </motion.a >
              <motion.a href="https://twitter.com" target="_blank"> 
                <i className="fab fa-twitter"></i>
              </motion.a>
              <motion.a href="https://linkedin.com" target="_blank"> 
                <i className="fab fa-linkedin"></i>
              </motion.a>



            </motion.div>
            
            
            
            
          </motion.div>   

          <motion.div 
            className="hero-image-container" 
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration: 0.8, delay: 0.4}}
          >
            <div className="code-display"> 
              <SyntaxHighlighter>
                {`const aboutMe: DeveloperProfile = {
  codename: "PedroTech",
  origin: "🌍 Somewhere between a coffee shop and a terminal",
  role: "Fullstack Web Sorcerer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
              </SyntaxHighlighter>
            </div>

          </motion.div>
        </div>
      </motion.section>
    ); 
 
        

   

    
    
}