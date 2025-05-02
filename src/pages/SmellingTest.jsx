import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Screenshot 2025-03-10 221747.png';
import './AudioTest.css';

const AudioTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
    const audioRef = useRef(null);
    const [isTamil, setIsTamil] = useState(false);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const handleToggle = () => {
        setIsTamil((prevIsTamil) => !prevIsTamil);
    };
    const translations = {
        en: {
            exit: "Exit",
            back: "Back",
            next: "Next",
            question: "Question",
            clue: "Clue",
            submit: "Submit",
            completed: "Quiz Completed!",
            finalScore: "Your Final Score",
            restart: "Restart Quiz",
            answers: "Your Answers",
            pleaseSelect: "Please select an answer before proceeding!",
        },
        ta: {
            exit: "வெளியேறு",
            back: "மீண்டும்",
            next: "அடுத்து",
            question: "கேள்வி",
            clue: "குறிப்பு",
            submit: "சமர்ப்பிக்க",
            completed: "வினாடி வினா முடிந்தது!",
            finalScore: "உங்கள் இறுதி மதிப்பெண்",
            restart: "மீண்டும் தொடங்கவும்",
            answers: "உங்கள் பதில்கள்",
            pleaseSelect: "தொடர்பதற்கு முன்பு ஒரு பதிலை தேர்ந்தெடுக்கவும்!",
        },
    };
    const questions = [
        {
            id: 1,
            clue: {
                en: "This fragrance is often associated with relaxation and is commonly used in essential oils.",
                ta: "இந்த வாசனை தளர்வு உடையதாகும் மற்றும் பொதுவாக நியம ஆரோமாவாயுவில் பயன்படுத்தப்படுகிறது."
            },
            options: {
                en: ["Sound of drilling machine", "Sound of boring machine"],
                ta: ["துளையிடும் இயந்திரத்தின் ஒலி", "போரிங் இயந்திரத்தின் ஒலி"]
            },
            correctAnswer: {
                en: "Sound of boring machine",
                ta: "போரிங் இயந்திரத்தின் ஒலி"
            }
        },
        {
            id: 2,
            clue: {
                en: "This scent is fresh and commonly found in toothpaste and chewing gum.",
                ta: "இந்த வாசனை சுறுசுறுப்பானது மற்றும் பொதுவாக பற்பசை மற்றும் கவ்வழி கோமில் காணப்படும்."
            },
            options: {
                en: ["Mint", "Vanilla", "Sandalwood"],
                ta: ["புதினா", "வெண்ணிலா", "சந்தனம்"]
            },
            correctAnswer: {
                en: "Mint",
                ta: "புதினா"
            }
        },
        {
            id: 3,
            clue: {
                en: "This fragrance is warm and woody, often used in perfumes and incense.",
                ta: "இந்த வாசனை சூடானதும் மர வாசனையுடையதும் ஆகும், பெருமூச்சு மற்றும் புகையிலைப் பொருட்களில் பெரும்பாலும் பயன்படுத்தப்படுகிறது."
            },
            options: {
                en: ["Sandalwood", "Cinnamon", "Jasmine"],
                ta: ["சந்தனம்", "இலவங்கம்", "மல்லிகை"]
            },
            correctAnswer: {
                en: "Sandalwood",
                ta: "சந்தனம்"
            }
        }
    ];


    console.log("My questions:", questions);

    const handleOptionClick = () => {
        audioRef.current.pause();
        setSelected(null);
    };

    const handleSubmit = () => {
        audioRef.current.pause();

        if (selected === null) {
            alert(translations[isTamil ? "ta" : "en"].pleaseSelect);
            return;
        }

        if (selected === questions[currentQuestion].correctAnswer[isTamil ? "ta" : "en"]) {
            setScore(score + 1);
        }


        setTimeout(() => {
            setSelected(null);
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                audioRef.current.load();
            } else {
                setIsQuizCompleted(true);
            }
        }, 1000);
    };

    if (isQuizCompleted) {
        return (
            <div className="audio-quiz-container">
                <h2>{translations[isTamil ? "ta" : "en"].completed}</h2>
                <p>{translations[isTamil ? "ta" : "en"].finalScore}: {score} / {questions.length}</p>
                <button onClick={() => window.location.reload()} className="audio-restart-button">
                    {translations[isTamil ? "ta" : "en"].restart}
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="first">
                <img src={logo} alt="Quiz Logo" style={{ width: '100px', height: '100px', marginTop: '-20px' }} />
                <p className="top-head">Smelling/Sound Identification Test</p>
            </div>

            <div className="main-learn">
                <div className="exit-btn">
                    <Link to="/">{translations[isTamil ? "ta" : "en"].exit}</Link>
                </div>
            </div>

            <div className="translate-section">
                <label className="language-toggle">
                    <span className="toggle-text">{isTamil ? 'தமிழ்' : 'English'}</span>
                    <input type="checkbox" checked={isTamil} onChange={handleToggle} className="language-checkbox" />
                    <span className="toggle-switch"></span>
                </label>
            </div>

            <div className="audio-quiz-container">
                <div className="audio-title-container">
                    <h2 className="audio-title">{translations[isTamil ? "ta" : "en"].question}</h2>
                    <h3 className="audio-question" style={{ color: "black", fontSize: "20px" }}>
                        {questions[currentQuestion].clue[isTamil ? "ta" : "en"]}
                    </h3>
                    <h3 className="audio-question" style={{ color: "black", fontSize: "20px", marginTop: "10px" }}>
                        {translations[isTamil ? "ta" : "en"].clue}
                    </h3>
                </div>

                <div className="audio-player-container">
                    <audio ref={audioRef} src={questions[currentQuestion].sound} />
                </div>

                <h3 style={{ marginTop: "100px" ,marginLeft:"100px"}}>{translations[isTamil ? "ta" : "en"].answers}</h3>
                <div className="audio-options">
                    {questions[currentQuestion].options[isTamil ? "ta" : "en"].map((option, index) => (
                        <label key={index} className="audio-radio-option" style={{ fontSize: "20px" }} onClick={handleOptionClick}>
                            <input type="radio" name="answer" value={option} onChange={() => setSelected(option)} checked={selected === option} />
                            <span className="audio-custom-radio"></span>
                            {option}
                        </label>
                    ))}

                </div>

                <button className="audio-submit-button" onClick={handleSubmit}>
                    {translations[isTamil ? "ta" : "en"].submit}
                </button>
            </div>

            <div className="buttons">
                <Link to="/fragnmentModule" className="button" style={{ textDecoration: "none" }}>
                    {translations[isTamil ? "ta" : "en"].back}
                </Link>
            </div>
        </>
    );
};

export default AudioTest;
