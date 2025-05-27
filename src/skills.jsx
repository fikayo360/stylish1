import { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './skills.css'
const SkillsSection = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    const delay = 0
      useEffect(() => {
        if (inView) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay },
          });
        }
      }, [controls, inView, delay]);

   return(
        <section className="container skillSection">
            <div id="skills">
                <div className="skill clearBorder">
                    <h1>My skills</h1>
                </div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref} >
                    <h1>web design </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref}>
                    <h1>ui/ux </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref}>
                    <h1>motion design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref}>
                    <h1>vfx</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref}>
                    <h1>branding</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref}>
                    <h1>digital art</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill" initial={{ opacity: 0, y: 40 }} animate={controls} ref={ref}>
                    <h1>3d animations</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>
            </div>
        </section>
   )
};

export default SkillsSection;