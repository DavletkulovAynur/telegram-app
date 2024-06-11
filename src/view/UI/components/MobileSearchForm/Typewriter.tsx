import React, { useState, useEffect } from 'react';

interface TypewriterProps {
    texts: string[];
    speed?: number;
    pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 100, pause = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [loop, setLoop] = useState(0);

    useEffect(() => {
        if (texts.length === 0) return;

        // Ensure loop index is within bounds
        if (loop >= texts.length) {
            setLoop(0);
            return;
        }

        if (!deleting && subIndex < texts[loop].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[loop].charAt(subIndex));
                setSubIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (deleting && subIndex > 0) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setSubIndex((prev) => prev - 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (!deleting && subIndex === texts[loop].length) {
            const timeout = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(timeout);
        } else if (deleting && subIndex === 0) {
            setDeleting(false);
            setLoop((prev) => prev + 1);
        }
    }, [subIndex, deleting, texts, loop, speed, pause]);

    return <div>{displayedText}</div>;
};

export default Typewriter;
