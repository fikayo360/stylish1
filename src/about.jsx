import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css';

const About = () => {
 const textControls = useAnimation();
  const [textRef, textInView] = useInView({
    triggerOnce:true,
    threshold: 0.2,
  });

  // Controls for image
  const imageControls = useAnimation();
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Start animations when elements come into view
  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
    if (imageInView) {
      imageControls.start('visible');
    }
  }, [textControls, textInView, imageControls, imageInView]);

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

    return(
    <section className="container about-me-container">
      <div className="about-me-content">
        <motion.div 
          className="about-me-text"
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
        >
          <motion.h1 variants={paragraphVariants}>About Me</motion.h1>
          <motion.p variants={paragraphVariants}>
            Step into the world of Frank, where creativity knows no bounds. As 
            the mastermind behind every stroke of design, I blend artistry with 
            strategy to create immersive digital experiences that resonate with 
            audiences.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            My journey in design is one of continuous exploration and growth, 
            where each project serves as a canvas for pushing boundaries and 
            exceeding expectations.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Beyond technical proficiency, my approach is defined by empathy 
            and collaboration. By deeply understanding the needs and 
            aspirations of clients, I forge partnerships that transcend mere 
            transactions, fostering an environment where creativity flourishes 
            and visions become reality.
          </motion.p>
          <motion.p variants={paragraphVariants}>
            Join me on this transformative journey, where every pixel tells a 
            story and every project is an opportunity to inspire. Together, let's 
            embark on a quest to redefine possibility and shape the future of 
            design.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="about-me-image"
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
        >
          <div className="image-container">
            <img src="https://framerusercontent.com/images/Z2n01W4lrTe2qvIDLfPvq1oEusg.jpg?scale-down-to=1024" alt="Portrait of Frank" />
          </div>
        </motion.div>
      </div>
    </section>
    )
}

export default About