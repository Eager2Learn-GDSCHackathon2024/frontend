import React, { useState, useEffect } from 'react';

const DynamicTextDisplay = () => {
  const words = ['This', 'is', 'an', 'example', 'sentence', 'with', 'changing', 'speed', 'of', 'words.'];
  const [displayedWords, setDisplayedWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(500); // Default speed: 500 milliseconds

  useEffect(() => {
    const timer = setTimeout(() => {
      // Add the next word to the displayedWords array
      setDisplayedWords(prevWords => [...prevWords, words[wordIndex]]);
      // Increment word index or reset to 0 if reached the end of the words array
      setWordIndex(prevIndex => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    }, speed);

    // Clear the timer when the component unmounts or when wordIndex changes
    return () => clearTimeout(timer);
  }, [wordIndex, speed]); // Re-run effect when wordIndex or speed changes

  return (
    <div>
      {displayedWords.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
};

export default DynamicTextDisplay;
