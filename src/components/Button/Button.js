// Button.jsx
import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneAltSlash } from 'react-icons/fa';
import './Button.scss';

function Button({ onClick }) {
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);
    const [content, setContent] = useState("");

    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const recognitionInstance = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognitionInstance.lang = 'vi-VN';
            recognitionInstance.continuous = true;

            recognitionInstance.onstart = function () {
                console.log('Speech recognition started');
            };

            recognitionInstance.onend = function () {
                console.log('Speech recognition ended');
                if (isListening) {
                    recognitionInstance.start(); // Start again if continuous mode is enabled
                }
            };

            recognitionInstance.onresult = function (event) {
                const transcript = event.results[event.results.length - 1][0].transcript;
                console.log('Recognized speech:', transcript);
                setContent(transcript);
            };

            setRecognition(recognitionInstance);
        } else {
            console.error('Speech recognition not supported in this browser');
        }

        return () => {
            if (recognition) {
                recognition.abort();
            }
        };
    }, [isListening]);

    const toggleSpeechRecognition = () => {
        if (isListening) {
            setIsListening(false);
            recognition.stop();
        } else {
            setIsListening(true);
            recognition.start();
        }
    };

    useEffect(() => {
        onClick(content); // Pass content to the onClick function
    }, [content]);

    return (
        <button className="round-button" onClick={toggleSpeechRecognition}>
            {isListening ? <FaMicrophone style={{ fontSize: '24px' }} /> : <FaMicrophoneAltSlash style={{ fontSize: '24px' }} />}
        </button>
    );
}

export default Button;
