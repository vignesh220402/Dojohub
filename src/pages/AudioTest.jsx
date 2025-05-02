import React, { useRef, useState } from 'react';
import Sound1 from "../assets/drillingAudio.mp3";
import Sound2 from "../assets/drillingAudio.mp3";
import { Link } from 'react-router-dom';
import logo from '../assets/Screenshot 2025-03-10 221747.png';
import './AudioTest.css';

const AudioTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isAudioPlayed, setIsAudioPlayed] = useState(false); // Track if audio is played
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
    const [isQuizCompleted, setIsQuizCompleted] = useState(false); // Track quiz completion

    const questions = [
        {
            id: 1,
            sound: Sound1,
            options: ["Drilling", "Singing", "Thunder"],
            correctAnswer: "Drilling",
        },
        {
            id: 2,
            sound: Sound2,
            options: ["Rain", "Clapping", "Bird Chirping"],
            correctAnswer: "Bird Chirping",
        },
        {
            id: 3,
            sound: Sound2,
            options: ["Rain", "Clapping", "Bird Chirping"],
            correctAnswer: "Clapping",
        }
    ];
    console.log(`my qiestions ${questions}`);
    

    // Toggle Play/Pause
    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            setIsAudioPlayed(true); // Enable options once audio starts playing
        }
        setIsPlaying(!isPlaying);
    };

    // Seek within the audio
    const seekAudio = (e) => {
        const seekTime = (e.target.value / 100) * duration;
        audioRef.current.currentTime = seekTime;
        setCurrentTime(seekTime);
    };

    // When metadata loads, set duration
    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    // Update current playback time
    const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    // Handle option selection
    const handleOptionClick = () => {
        // Stop the audio when an option is clicked
        audioRef.current.pause();
        setIsPlaying(false);

        // Clear the selected option
        setSelected(null);
    };

    // Handle user answers
    const handleSubmit = () => {
        // Stop audio playback
        audioRef.current.pause();
        setIsPlaying(false);

        // Check if the answer is correct and increment score
        if (selected === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        // Proceed to the next question or end the quiz
        setTimeout(() => {
            setSelected(null);
            setIsAudioPlayed(false); // Reset for the next question
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                audioRef.current.load(); // Load the next question's audio
            } else {
                setIsQuizCompleted(true); // Mark quiz as completed
            }
        }, 1000); // Delay for feedback
    };

    if (isQuizCompleted) {
        return (
            <div className="audio-quiz-container">
                <h2>Quiz Completed!</h2>
                <p>Your Final Score: {score} / {questions.length}</p>
                <button onClick={() => window.location.reload()} className="audio-restart-button">
                    Restart Quiz
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="first">
                <img
                    src={logo}
                    alt=""
                    style={{ width: '100px', height: '100px', marginTop: '-20px' }}
                />
                <p className='top-head'> Hearing/ Sound Identification / Test</p>
            </div>
            <div className="main-learn">
                <div className="exit-btn">
                    <Link to="/">Exit</Link>
                </div>
            </div>

            <div className="audio-quiz-container">
                <div className="audio-title-container">
                    <h2 className="audio-title">Question</h2>
                    <h3 className="audio-question">Guess the sound and choose the correct option {currentQuestion + 1} of {questions.length}</h3>
                </div>

                {/* Audio Player */}
                <div className="audio-player-container">
                    <audio
                        ref={audioRef}
                        src={questions[currentQuestion].sound}
                        onLoadedMetadata={onLoadedMetadata}
                        onTimeUpdate={updateTime}
                    />
                    <div className="audio-controls">
                        <div className="audio-progress-bar">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={(currentTime / duration) * 100 || 0}
                                onChange={seekAudio}
                            />
                        </div>
                        <button
                            className="audio-control-backward"
                            onClick={() => {
                                audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10);
                            }}
                        >
                            &#x23EA;
                        </button>
                        <button className="audio-control-play-pause" onClick={togglePlayPause}>
                            {isPlaying ? "⏸️" : "▶️"}
                        </button>
                        <button
                            className="audio-control-forward"
                            onClick={() => {
                                audioRef.current.currentTime = Math.min(
                                    duration,
                                    audioRef.current.currentTime + 10
                                );
                            }}
                        >
                            &#x23E9;
                        </button>
                    </div>
                </div>

                {/* Radio Button Options */}
                <h3 className='Your-answer'>Yours Answers</h3>
                <div className="audio-options">
                    {questions[currentQuestion].options.map((option, index) => (
                        <label
                            key={index}
                            className={`audio-radio-option ${isAudioPlayed ? '' : 'audio-disabled'}`}
                            onClick={handleOptionClick} 
                        >
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                onChange={() => setSelected(option)}
                                checked={selected === option}
                                disabled={!isAudioPlayed} // Disable options until audio starts playing
                            />
                            <span className="audio-custom-radio"></span>
                            {option}
                        </label>
                    ))}
                </div>

                {/* Submit Button */}
                <button
                    className="audio-submit-button"
                    onClick={handleSubmit}
                    disabled={!selected} // Disable until an option is selected
                >
                    Submit
                </button>
            </div>
        </>
    );
};

export default AudioTest;
