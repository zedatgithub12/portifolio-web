import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextSlideUp = ({ words, animationDuration = 0.5, sx = {} }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, animationDuration * 4200);

    return () => clearInterval(interval);
  }, [animationDuration, words.length]);

  const word = words[currentWordIndex];

  return (
    <div
      style={{
        position: "relative",
        height: "4em",
        marginTop: 14,
        // overflow: "hidden", // Ensure the overflowing text is hidden
        ...sx,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          className="text-5xl font-bold"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 20,
            },
          }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 20,
            },
          }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "left",
            lineHeight: 0.8,
            whiteSpace: "nowrap", // Prevent text from wrapping
          }}
        >
          {word.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: index * 0.05,
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              exit={{
                opacity: 0,
                x: 20,
                transition: { duration: 0.2, ease: "easeIn" },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextSlideUp;
