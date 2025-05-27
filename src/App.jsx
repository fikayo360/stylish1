import { useState } from 'react'
import './App.css'
import Hero from './hero'
import About from './about'
import SelectedWork from './selectedWorks'
import SkillsSection from './skills'
import Contact from './contact'
import TestimonialsSection from './testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero />
    <About />
    <SelectedWork />
    <SkillsSection/>
    <TestimonialsSection/>
    <Contact />
   

    
     <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-about">
                    <h3>Artistry</h3>
                    <p>A creative studio focused on bringing your brand vision to life through thoughtful design and strategic execution.</p>
                    <div class="social-links">
                        <a href="#"><span>FB</span></a>
                        <a href="#"><span>IG</span></a>
                        <a href="#"><span>TW</span></a>
                        <a href="#"><span>DR</span></a>
                        <a href="#"><span>BE</span></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Artistry. All rights reserved.</p>
            </div>
        </div>
    </footer>

    </>
  )
}

export default App
