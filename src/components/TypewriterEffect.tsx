import React, { useState, useEffect } from 'react';

const TypewriterEffect = () => {
  const roles = [
    "Postgraduate Data Science Student",
    "Data Science & AI Enthusiast",
    "Machine Learning Developer",
    "Data Engineering Enthusiast"
  ];
  
  const [currentRole, setCurrentRole] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < roles[currentRole].length) {
          setCurrentText(roles[currentRole].slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentRole, isDeleting]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold min-h-[2em]">
      I'm a{' '}
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        {currentText}
      </span>
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default TypewriterEffect;