import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TextSlideUp = ({ words, animationDuration }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, animationDuration * 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {words.map((word, index) => (
        <motion.span
          class="text-5xl font-bold"
          key={index}
          style={{ position: "absolute", lineHeight: 1.2, overflow: "hidden" }}
          initial={{
            y: index === currentWordIndex ? -100 : 0,
            opacity: index === currentWordIndex ? 1 : 0,
          }}
          animate={
            index === currentWordIndex
              ? { y: 0, opacity: 1 }
              : { y: -18, opacity: 0 }
          }
          transition={{
            type: "keyframes",
            damping: 60,
            stiffness: 120,
            duration: animationDuration,
          }}
          exit={{ y: -14, opacity: 0 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextSlideUp;
