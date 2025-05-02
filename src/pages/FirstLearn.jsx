import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Screenshot 2025-03-10 221747.png';
import quesing from '../assets/Screenshot 2025-04-28 193648.png';
import './FirstLearn.css';

const FirstLearn = () => {
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
            stator: "U340 Rotor",
            functions: "Functions",
            functionsContent: "The U340 rotor in two-wheelers generates a magnetic field for power production and supports ignition timing by triggering the spark at the right moment. It works with the stator to produce electricity for charging the battery and running electrical systems. Mounted on the crankshaft, it aids in engine balance and smooth rotation. It also assists in starting mechanisms like kick-start or electric start.",
        },
        ta: {
            exit: "வெளியேறு",
            back: "பின் செல்ல",
            next: "அடுத்தது",
            pagePath: "காட்சி / பகுதி அடையாளம் / கற்றல்",
            stator: "U340 ரோட்டர்",
            functions: "செயல்பாடுகள்",
            functionsContent: "U340 ரோட்டர் இரண்டு சக்கர வாகனங்களில் மின்காந்த புலத்தை உருவாக்குகிறது, இது மின் உற்பத்திக்கு உதவுகிறது மற்றும் ஆற்றல் உற்பத்தி செய்ய உதவுகிறது. இது ஸ்டேட்டருடன் இணைந்து மின்சாரம் உருவாக்கி பேட்டரி சார்ஜ் செய்ய மற்றும் மின் அமைப்புகளை இயக்க உதவுகிறது. இயந்திரத்திற்குச் செல்வாக்கை வழங்க, இது கிராங்க்ஷாஃப்டில் பொருத்தப்பட்டுள்ளது, இது எந்திர சமநிலையை மற்றும் மென்மையான சுற்றுவட்டத்தை உறுதிப்படுத்துகிறது. மேலும், இது கிக் ஸ்டார்ட் மற்றும் மின்னணு ஸ்டார்ட் போன்ற தொடக்க முறைமைகளுக்குக் கூடுதல் ஆதரவு வழங்குகிறது.",
        }
    };

    return (
        <>
            <div className="first">
                <img
                    src={logo}
                    alt=""
                    style={{ width: '100px', height: '100px', marginTop: '-20px' }}
                />
                <p style={{fontSize:"20px"}}>{isTamil ? translations.ta.pagePath : translations.en.pagePath}</p>
            </div>
            <div className="main-learn">
                <div className="exit-btn">
                    <Link to="/">{isTamil ? translations.ta.exit : translations.en.exit}</Link>
                </div>

                {/* Translate Button */}
                <div className="translate-section">
                    <label className="language-toggle">
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

                <div className="Ques-img">
                    <img src={quesing} alt="" />
                    <h4>{isTamil ? translations.ta.stator : translations.en.stator}</h4>
                </div>
                <div className="desc">
                    <h4><b>{isTamil ? translations.ta.description : translations.en.description}</b></h4>
                    <h4 style={{ fontWeight: '500' }}>
                        {isTamil ? translations.ta.descriptionContent : translations.en.descriptionContent}
                    </h4>
                </div>
                <div className="desc">
                    <h4 style={{marginLeft:"50px"}}><b>{isTamil ? translations.ta.functions : translations.en.functions}</b></h4>
                    <h4 style={{ fontWeight: '500', width: '90%',marginLeft:"50px",letterSpacing:"0.7px",lineHeight:"40px" }}>
                        {isTamil ? translations.ta.functionsContent : translations.en.functionsContent}
                    </h4>
                </div>

                <div className="buttons">
                    <Link to="/fivemodule" className="button" style={{ textDecoration: 'none' }}>
                        {isTamil ? translations.ta.back : translations.en.back}
                    </Link>
                </div>
                <div className="Next-btn">
                    <Link to="/Secondlearn">{isTamil ? translations.ta.next : translations.en.next}</Link>
                </div>
            </div>
        </>
    );
};

export default FirstLearn;
