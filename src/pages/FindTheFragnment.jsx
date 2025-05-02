import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Learn.css';
import Logo from '../assets/Screenshot 2025-03-10 221747.png';
const FindTheFragnment = () => {
    const [isTamil, setIsTamil] =useState(false)

    const handleToggle = () => {
        setIsTamil(!isTamil);
    };
    const translations = {
        en: {
            exit: "Exit",
            back: "Back",
            next: "Next",
            visionModule: "SMELLING MODULE",
            chooseSection: "FRAGANCE IDENTIFICATION",
            sectionDescription: "This section focuses on recognizing various electronic, electrical and mechanical components, understanding their functions and identifying their practical applications.",
        },
        ta: {
            exit: "வெளியேறு",
            back: "பின்செல்",
            next: "அடுத்து",
            visionModule: "மணமடைதல் பிரிவு",
            chooseSection: "நறுமணத் தேர்வு",
            sectionDescription: "இந்த பகுதி மின்னணு, மின்சார மற்றும் இயந்திரக் கூறுகளை அடையாளம் காண்பதிலும், அவற்றின் செயல்பாடுகளைப் புரிந்துகொள்வதிலும், அவற்றின் பயன்பாடுகளை நுண்ணியமாக அறிந்து கொள்ள உதவுகிறது.",
        },
    };

    return (
        <>
            <div className="first">
                <img src={Logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
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
                <Link to="/fragnmentModule" className='button' style={{ textDecoration: "none" }}>
                    {isTamil ? translations.ta.back : translations.en.back}
                </Link>
            </div>
            <div className="Next-btn">
                <Link to="/fragnmentModule">{isTamil ? translations.ta.next : translations.en.next}</Link>
            </div>
        </>
    )
}

export default FindTheFragnment