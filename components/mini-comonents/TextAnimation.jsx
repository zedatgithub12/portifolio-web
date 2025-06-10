"use client"; 
import { motion } from "framer-motion";

const words = ["Design", "Development", "Testing"];


const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    skewX: 10,
    rotate: 10,
    scale: 0.8,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    skewX: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: [0.6, 0.01, 0.4, 0.95], 
    },
  }),
};


const GSAPStyleText = () => {
  return (
    <div className=" flex items-center justify-center text-green-500 font-extrabold text-5xl md:text-7xl tracking-tight overflow-hidden">
      <div className="flex flex-col items-center space-y-8">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex space-x-1">
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={wordIndex * 20 + i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GSAPStyleText;
