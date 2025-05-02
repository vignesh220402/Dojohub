import React, { useState } from 'react';
import './Question.css';
import Logo from '../assets/Screenshot 2025-03-10 221747.png';
import stator from '../assets/Stator.jpg';
import rotor from '../assets/Image1.jpg';
import cellImage from '../assets/gear.jpg';
import atomImage from '../assets/Testing.jpg';
import waterImage from '../assets/voice.jpg';
import co2Image from '../assets/voice.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigatetoanother = useNavigate();

  const questions = [
    {
      question: 'What is the rotating part of a machine that transmits mechanical power or interacts with a magnetic field to produce motion or electrical power?',
      options: [{ text: '(A) Stator', image: stator }, { text: '(B) Rotor', image: rotor }],
      correctAnswer: '(B) Rotor',
      tamilQuestion: 'இயந்திரத்தின் திரிபு பகுதி எது, இது இயந்திர சக்தியை பரிமாற்றம்கொடுக்கிறது அல்லது காந்த துறையின் வழியாகத் தொடர்பு கொடுத்து இயக்கத்தை அல்லது மின்னணு சக்தியை உருவாக்குகிறது?',
      tamilOptions: [{ text: 'ஸ்டேட்டர்', image: stator }, { text: 'ரோட்டர்', image: rotor }],
      tamilCorrectAnswer: 'ரோட்டர்'
    },
    {
      question: 'What is the basic building block of the human body?',
      options: [
        { text: '(A) Cell', image: cellImage },
        { text: '(B) Atom', image: atomImage }
      ],
      correctAnswer: '(A) Cell',
      tamilQuestion: 'மனித உடலின் அடிப்படை கட்டுமானம் என்ன?',
      tamilOptions: [
        { text: 'செல்', image: cellImage },
        { text: 'அணு', image: atomImage }
      ],
      tamilCorrectAnswer: 'செல்'
    },
    {
      question: 'What is the chemical symbol for water?',
      options: [
        { text: '(A) H2O', image: waterImage },
        { text: '(B) CO2', image: co2Image }
      ],
      correctAnswer: '(A) H2O',
      tamilQuestion: 'நீருக்கான வேதியியல் சின்னம் என்ன?',
      tamilOptions: [
        { text: 'H2O', image: waterImage },
        { text: 'CO2', image: co2Image }
      ],
      tamilCorrectAnswer: 'H2O'
    }
  ];
  const translations = {
    en: {
      pagePath: "Vision / Part Identification / Test",
    },
    ta: {
      pagePath: "காட்சி / பகுதி அடையாளம் / கற்றல்",
    }
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [score, setScore] = useState(0);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isTamil, setIsTamil] = useState(false); // State to toggle Tamil language

  const handleOptionClick = (optionText) => {
    setSelectedValue(optionText);
    setShowMessage(true);

    // Determine the correct answer based on the language
    const correctAnswer = isTamil
      ? questions[currentQuestionIndex].tamilCorrectAnswer
      : questions[currentQuestionIndex].correctAnswer;

    if (optionText === correctAnswer) {
      setScore(score + 1);
      setMessage(isTamil ? 'சரி பதில்!' : 'Correct Answer!');
    } else {
      setIncorrectAttempts(incorrectAttempts + 1);
      setMessage(isTamil ? 'தவறானது, மீண்டும் முயற்சிக்கவும்.' : 'Incorrect, try again.');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedValue('');
      setShowMessage(false);
      setMessage('');
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedValue('');
    setScore(0);
    setIncorrectAttempts(0);
    setShowResults(false);
    setShowMessage(false);
    setMessage('');
  };

  const finalScore = score - incorrectAttempts;

  return (
    <div className='quiz-container'>
      {!showResults ? (
        <>
          <div className='first'>
            <img src={Logo} alt='Logo' style={{ width: '100px', height: '100px', marginTop: '-20px' }} />
            <p>{isTamil ? translations.ta.pagePath : translations.en.pagePath}</p>
          </div>
          <div className='main-learn'>
            <div className='exit-btn'>
              <Link to='/'>Exit</Link>
            </div>
            <div style={{ float: "right", marginRight: "90px", fontFamily: "Arial, Helvetica, sans-serif" }}>
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={isTamil}
                  onChange={() => setIsTamil((prev) => !prev)}
                  className="toggle-input"
                  aria-label="Toggle language between Tamil and English"
                />
                <span className="toggle-slider"></span>
              </label>

              <span style={{ marginLeft: "10px", fontSize: "14px" }}>
                {isTamil ? 'தமிழ்' : 'English'}
              </span>
            </div>
          </div>
          <div className='desc'>
            <h4><b>{isTamil ? `கேள்வி ${currentQuestionIndex + 1}` : `Question ${currentQuestionIndex + 1}`}</b></h4>
            <div className='quiz-question'>
              {isTamil ? questions[currentQuestionIndex].tamilQuestion : questions[currentQuestionIndex].question}
            </div>
          </div>
          <div className='quiz-options'>
            {(isTamil ? questions[currentQuestionIndex].tamilOptions : questions[currentQuestionIndex].options).map((option) => (
              <div
                className={`quiz-option${selectedValue === option.text ? ' selected' : ''}`}
                key={option.text} // Using option.text as a key
                onClick={() => handleOptionClick(option.text)}
              >
                <img
                  src={option.image}
                  alt={option.text}
                  className={`option ${selectedValue === option.text ? 'selected' : ''}`}
                  style={{
                    border: 'solid black 2px'
                  }}
                />
                <div className="option-text"> {option.text} </div>
              </div>
            ))}
          </div>
          {showMessage && (
            <div
              style={{ fontFamily: " Arial, Helvetica, sans-serif" }}
              className={`message ${selectedValue === (isTamil ? questions[currentQuestionIndex].tamilCorrectAnswer : questions[currentQuestionIndex].correctAnswer) ? 'correct-message' : 'incorrect-message'}`}
            >
              {message}
            </div>
          )}
          {showMessage && selectedValue === (isTamil ? questions[currentQuestionIndex].tamilCorrectAnswer : questions[currentQuestionIndex].correctAnswer) && (
            <button onClick={handleNextQuestion} className='mynxt-btn' style={{ fontSize: "16px" }}>Submit</button>
          )}
          <div className='buttons'>
            <Link to='/visionmodule' className='button' style={{ textDecoration: 'none' }}>
              {isTamil ? 'மீண்டும்' : 'Back'}
            </Link>
          </div>
        </>
      ) : (
        <div className="quiz-resulesec">
          <div className='quiz-results' style={{ textAlign: "center" }}>
            <h2>{isTamil ? 'கேள்விகள் முடிந்தது!' : 'Quiz Complete!'}</h2>
            <p>{isTamil ? `உங்கள் மதிப்பெண்: ${finalScore} / ${questions.length}` : `Your score: ${finalScore} out of ${questions.length}`}</p>
            <p>{isTamil ? `தவறான முயற்சிகள்: ${incorrectAttempts}` : `Incorrect attempts: ${incorrectAttempts}`}</p>
            <p className={incorrectAttempts < questions.length * 0.5 ? 'good-result' : 'poor-result'}>
              {incorrectAttempts < questions.length * 0.5
                ? isTamil ? 'நல்ல வேலை! அடுத்த பாடத்தினை தொடரவும் 😊' : 'Good Job! Continue Your next Module 😊'
                : isTamil ? 'தவறுகளை குறைத்து மீண்டும் முயற்சிக்கவும்!😔' : 'Reduce Your attempts and Try again!😔'}
            </p>
            <button onClick={restartQuiz}>
              {isTamil ? 'குயிசை மீண்டும் தொடங்கவும்' : 'Restart Quiz'}
            </button>
            {incorrectAttempts <= 2 && (
              <button style={{ marginTop: "10px", backgroundColor: "green" }} onClick={() => navigatetoanother('/thirdmodule')}>
                {isTamil ? 'அடுத்த பாடம்' : 'Next Module'}
              </button>
            )}
          </div>
        </div>


      )}
    </div>
  );
};

export default Quiz;
