import { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './skills.css'
const SkillsSection = () => {


   return(
        <section className="container skillSection">
            <div id="skills">
                <div className="skill clearBorder">
                    <h1>My skills</h1>
                </div>

                <motion.div className="skill" >
                    <h1>web design </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill">
                    <h1>ui/ux </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill">
                    <h1>motion design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill">
                    <h1>vfx</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill">
                    <h1>branding</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill">
                    <h1>digital art</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium suscipit a, eius error
                       nostrum rem quis reprehenderit similique mollitia. Voluptatibus blanditiis debitis sapiente commodi vitae?
                       Repudiandae praesentium qui quae?
                    </p>
                </motion.div>

                <motion.div className="skill">
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