import React, { useState, useEffect } from 'react';

const SpeechToText = () => {
    const [isListening, setIsListening] = useState(false);
    const [recognition, setRecognition] = useState(null);
    useEffect(() => {
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const recognitionInstance = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognitionInstance.lang = 'vi-VN';
            recognitionInstance.continuous = true;
            recognitionInstance.onstart = function() {
                console.log('Speech recognition started');
            };
            recognitionInstance.onend = function() {
                console.log('Speech recognition ended');
                if (isListening) {
                    recognitionInstance.start(); // Start again if continuous mode is enabled
                }
            };
            recognitionInstance.onresult = function(event) {
                const transcript = event.results[event.results.length - 1][0].transcript;
                console.log('Recognized speech:', transcript);
                // Do something with the recognized speech, like updating a state variable
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

    return (
        <div>
            <button onClick={toggleSpeechRecognition}>
                {isListening ? 'Stop Listening' : 'Start Listening'}
            </button>
            {/* You can render additional components or UI here */}
        </div>
    );
};

export default SpeechToText;
