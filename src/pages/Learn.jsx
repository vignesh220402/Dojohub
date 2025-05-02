import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';
import Logo from '../assets/Screenshot 2025-03-10 221747.png';

const Learn = () => {
    const [isTamil, setIsTamil] = useState(false);

    const handleToggle = () => {
        setIsTamil(!isTamil);
    };
    const translations = {
      en: {
          exit: "Exit",
          back: "Back",
          next: "Next",
          pagePath: "Vision / Part Identification / Learn",
          visionModule: "VISION MODULE",
          chooseSection: "PART IDENTIFICATION",
          sectionDescription: "This section focuses on recognizing various electronic, electrical and mechanical components, understanding their functions and identifying their practical applications.",
      },
      ta: {
          exit: "வெளியேறு",
          back: "மீண்டும்",
          next: "அடுத்தது",
          pagePath: "காட்சி / பகுதி அடையாளம் / கற்றல்",
          visionModule: "காட்சி தொகுதி",
          chooseSection: "ஒரு பிரிவைத் தேர்ந்தெடுக்கவும்",
          sectionDescription: "இந்த பிரிவு மின்னணு, மின்சார மற்றும் இயந்திர கூறுகளை அறிந்துகொள்வது, அவற்றின் செயல்பாடுகளை புரிந்துகொள்வது மற்றும் அவற்றின் செயல்பாட்டு பயன்பாடுகளைத் தேர்ந்தெடுப்பதை உள்ளடக்கியது.",
      },
  };
  
    return (
        <>
            <div className="first">
                <img src={Logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
                <p style={{fontSize:"20px"}}>{isTamil ? translations.ta.pagePath : translations.en.pagePath}</p>
            </div>
            <div className="exit-btn">
                <Link to='/'>{isTamil ? translations.ta.exit : translations.en.exit}</Link>
            </div>

            {/* Translate Button */}
            <div className="translate-section">
                <label className="language-toggle" id="languageToggle">
                    <span className="toggle-text">{isTamil ? 'தமிழ்' : 'English'}</span>
                    <input
                        type="checkbox"
                        checked={isTamil}
                        onChange={handleToggle}
                        className="language-checkbox"
                    />
                    <span className="toggle-switch"></span>
                </label>
            </div>

            <div className="first-mainsec">
                <div className="question-intro">
                    <h3>{isTamil ? translations.ta.visionModule : translations.en.visionModule}</h3>
                    <h4>{isTamil ? translations.ta.chooseSection : translations.en.chooseSection}</h4>
                </div>
                <div className="intro-sec">
                    <h3>{isTamil ? translations.ta.sectionDescription : translations.en.sectionDescription}</h3>
                </div>
            </div>
            <div className="buttons">
                <Link to="/vision" className='button' style={{ textDecoration: "none" }}>
                    {isTamil ? translations.ta.back : translations.en.back}
                </Link>
            </div>
            <div className="Next-btn">
                <Link to="/firstlearn">{isTamil ? translations.ta.next : translations.en.next}</Link>
            </div>
        </>
    );
};

export default Learn;
