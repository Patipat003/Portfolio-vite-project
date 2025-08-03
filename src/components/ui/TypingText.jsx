import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50, showCursor = true, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete && onComplete();
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <span className="relative">
      {displayedText}
      {showCursor && !isComplete && (
        <span className="inline-block w-0.5 h-5 bg-cyan-400 ml-1 animate-pulse" />
      )}
    </span>
  );
};

export default TypingText;
