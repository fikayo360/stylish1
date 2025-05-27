import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SelectedWork.css';

const works = [
  { id: 1, src: 'https://framerusercontent.com/images/YSg6uvX9YHoJRk2otE3K0PkRVBE.jpg?scale-down-to=2048', alt: 'Work 1' },
  { id: 2, src: 'https://framerusercontent.com/images/qFWrYKIFSX6CAyuHpY8cpGTsQk.jpg?scale-down-to=2048', alt: 'Work 2' },
  { id: 3, src: 'https://framerusercontent.com/images/Fr0PpMUVm265YIdaw4sYAhw3aM0.jpg?scale-down-to=2048', alt: 'Work 3' },
  { id: 4, src: 'https://framerusercontent.com/images/92eOQ7R0cPozXLirlIYmtGYUEnc.jpg?scale-down-to=2048', alt: 'Work 4' },
  { id: 5, src: 'https://framerusercontent.com/images/Fr0PpMUVm265YIdaw4sYAhw3aM0.jpg?scale-down-to=2048', alt: 'Work 5' },
  { id: 6, src: 'https://framerusercontent.com/images/YSg6uvX9YHoJRk2otE3K0PkRVBE.jpg?scale-down-to=2048', alt: 'Work 6' },
  { id: 7, src: 'https://framerusercontent.com/images/Fr0PpMUVm265YIdaw4sYAhw3aM0.jpg?scale-down-to=2048', alt: 'Work 7' },
];

const MotionItem = ({ src, alt, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      className="masonry-item"
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};


export default function SelectedWork() {
  return (
    <section className="selected-work">
      <h2 className="section-title">Selected Work</h2>
      <div className="masonry">
        {works.map((item,index) => (
            <MotionItem
            key={item.id}
            src={item.src}
            alt={item.alt}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}