import React, { useEffect, useRef, useState } from 'react';

interface ITypeWriter {
  text: string;
  delay: number;
}

const useTypewriter = ({ text, delay }: ITypeWriter) => {
  const [displayText, setDisplayText] = useState('');
  const textRef = useRef(text);

  useEffect(() => {
    let i = 0;
    let j = 0;
    const timer = setInterval(() => {
      setDisplayText((prevDisplayText) => {
        if (i === textRef.current.length) {
          clearInterval(timer);
          return prevDisplayText;
        }
        if (j === delay) {
          j = 0;
          i++;
        }
        j++;
        return textRef.current.slice(0, i + 1);
      });
    }, 50);
    return () => clearInterval(timer);
  }, [text, delay]);

  return displayText;
};

const Typewriter: React.FC<ITypeWriter> = ({ text, delay }) => {
  const displayText = useTypewriter({ text, delay });
  return <>{displayText}</>;
};

export default Typewriter;
