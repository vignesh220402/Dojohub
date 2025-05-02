import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SecondPage.css';
import logo from '../assets/Screenshot 2025-03-10 221747.png';
import quesing2 from '../assets/Screenshot 2025-04-28 194504.png';

const SecondPage = () => {
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
          stator: "YANMAR 15A FWM",
          functions: "Functions",
          functionsContent: "The YANMAR 15A FWM (Flywheel Magneto) generates electrical power by rotating with the engine's crankshaft, supplying energy to charge the battery and run electrical components. It provides precise ignition timing for efficient combustion. The system supports both lighting and ignition needs in two-wheelers. Its compact design enhances engine performance and reliability.",
      },
      ta: {
        exit: "வெளியேறு",
        back: "மீண்டும் செல்ல",
        next: "அடுத்தது",
        pagePath: "காட்சி / பகுதி அடையாளம் / கற்றல்",
        stator: "YANMAR 15A FWM",
        functions: "செயல்பாடுகள்",
        functionsContent: "YANMAR 15A FWM (ஃப்ளைவீல் மாக்னெட்டோ) இயந்திரத்தின் கிராங்க்ஷாஃப்டுடன் இணைந்து சுழலும்போது மின்சாரம் உருவாக்குகிறது. இது பேட்டரிக்கு மின் சக்தியை வழங்கி மின்னணு பகுதிகளை இயக்க உதவுகிறது. மேலும், அது துல்லியமான தீப்பொறி நேரத்தை வழங்கி எரிப்பு செயல்திறனை மேம்படுத்துகிறது. இந்த அமைப்பு இருசக்கர வாகனங்களில் விளக்குகள் மற்றும் தீப்பொறி தேவைகளுக்குத் தக்கபடுத்துகிறது. அதன் சிறிய வடிவமைப்பு இயந்திர செயல்திறன் மற்றும் நம்பகத்தன்மையை அதிகரிக்கிறது.",
    }
  };
    return (
        <>
            <div className="first">
                <img src={logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
                <p>{isTamil ? translations.ta.pagePath : translations.en.pagePath}</p>
            </div>
            <div className="main-learn">
                <div className="exit-btn">
                    <Link to='/'>{isTamil ? translations.ta.exit : translations.en.exit}</Link>
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
                    <img src={quesing2} alt="" style={{ width: "250px" }} />
                    <h4>{isTamil ? translations.ta.stator : translations.en.stator}</h4>
                </div>

                <div className="desc">
                    <h4><b>{isTamil ? translations.ta.description : translations.en.description}</b></h4>
                    <h4 style={{ fontWeight: "500" }}>
                        {isTamil ? translations.ta.descriptionContent : translations.en.descriptionContent}
                    </h4>
                </div>

                <div className="desc">
                    <h4 style={{marginLeft:"50px"}}><b>{isTamil ? translations.ta.functions : translations.en.functions}</b></h4>
                    <h4 style={{fontWeight: '500',width: '90%',marginLeft:"50px",letterSpacing:"0.7px",lineHeight:"40px" }}>
                        {isTamil ? translations.ta.functionsContent : translations.en.functionsContent}
                    </h4>
                </div>

                <div className="buttons">
                    <Link to="/vision-learn" className='button' style={{ textDecoration: "none" }}>
                        {isTamil ? translations.ta.back : translations.en.back}
                    </Link>
                </div>
                <div className="Next-btn">
                    <Link to="/visionmodule">{isTamil ? translations.ta.next : translations.en.next}</Link>
                </div>
            </div>
        </>
    );
};

export default SecondPage;
