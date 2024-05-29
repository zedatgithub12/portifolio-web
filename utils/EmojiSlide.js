import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EmojiSlide = ({ emoji, animationDuration }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % emoji.length);
    }, animationDuration * 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {emoji.map((word, index) => (
        <motion.span
          class="text-4xl "
          key={index}
          style={{
            position: "absolute",
            lineHeight: 1.4,
            marginLeft: 2,
            overflow: "hidden",
          }}
          initial={{
            x: index === currentWordIndex ? -100 : 0,
            opacity: index === currentWordIndex ? 1 : 0,
          }}
          animate={
            index === currentWordIndex
              ? { x: 0, opacity: 1 }
              : { x: -18, opacity: 0 }
          }
          transition={{
            type: "keyframes",
            damping: 60,
            stiffness: 120,
            duration: animationDuration,
          }}
          exit={{ x: -14, opacity: 0 }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export default EmojiSlide;
