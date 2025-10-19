import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        // Задержка перед началом печати
        const startTimer = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (isStarted && currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            
            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed, isStarted]);

    return <span>{displayedText}</span>;
};

export default Typewriter;