import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

const Hero = () => {
    const [isNavActive, setIsNavActive] = useState(false);
  const [isFirstNameVisible, setIsFirstNameVisible] = useState(true);
  const [isLastNameVisible, setIsLastNameVisible] = useState(true);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const descriptionRef = useRef(null);
  
  useEffect(() => {
    // Create Intersection Observer
    const observerOptions = {
      root: null, // use viewport as root
      rootMargin: '0px',
      threshold: 0.3, // Adjust as needed
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        // Determine which element is being observed
        if (entry.target === firstNameRef.current) {
          setIsFirstNameVisible(entry.isIntersecting);
        } else if (entry.target === lastNameRef.current) {
          setIsLastNameVisible(entry.isIntersecting);
        } else if (entry.target === descriptionRef.current) {
          setIsDescriptionVisible(entry.isIntersecting);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe elements
    if (firstNameRef.current) observer.observe(firstNameRef.current);
    if (lastNameRef.current) observer.observe(lastNameRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    
    // Cleanup
    return () => {
      if (firstNameRef.current) observer.unobserve(firstNameRef.current);
      if (lastNameRef.current) observer.unobserve(lastNameRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);
  
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
    return (
        <div className='container'>
        <header>
        <a href="#" className="logo">F.V.</a>
        <div className="menu-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={isNavActive ? 'active' : ''}>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <span id='closeNav' onClick={toggleNav}>x</span>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-name">
            <span 
              ref={firstNameRef} 
              className={`first-name ${!isFirstNameVisible ? 'hidden' : ''}`}
            >
              Frank
            </span>
            <span 
              ref={lastNameRef} 
              className={`last-name ${!isLastNameVisible ? 'hidden' : ''}`}
            >
              Vazquez
            </span>
          </h1>
          <p 
            ref={descriptionRef} 
            className={`hero-description ${!isDescriptionVisible ? 'hidden' : ''}`}
          >
            Digital Designer with 10 years of experience based in Rome, Italy
          </p>
        </div>
      </section>
        </div>
    )
}

export default Hero