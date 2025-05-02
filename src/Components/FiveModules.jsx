import React from 'react'
import './FiveModules.css'
import { Link } from "react-router-dom";
import mod1 from '../assets/Eye.jpg'
import mod2 from '../assets/earing.jpg'
import mod3 from '../assets/Smelling.jpg'
import mod4 from '../assets/Touch.jpg'
import mod5 from '../assets/voice.jpg'
import Logo from '../assets/Screenshot 2025-03-10 221747.png'
const FiveModules = () => {
    return (
        <>
            <div className="first">
                <img src={Logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
            </div>
            <div className="exit-btn">
                <Link to='/'>Exit</Link>
            </div>
            <div className="vision-topic">
                <div className="sectences">
                    <h3>FIVE SENSE DOJO MODULES</h3>
                    <h4>CHOOSE A SECTION</h4>
                </div>
            </div>
            <div className="five-module">
                <div className="first-fivemod">
                    <Link to='/visionmodule'>
                        <img src={mod1} alt="" />
                        <h1>Vision</h1>
                    </Link>
                </div>
                <div className="first-fivemod">
                    <Link to='/hearing'>
                        <img src={mod2} alt="" />
                        <h1>Hearing</h1>
                    </Link>
                </div>
                <div className="first-fivemod">
                    <Link to='/FragnmentModule '>
                        <img src={mod3} alt="" />
                        <h1>Smelling</h1>
                    </Link>
                </div>
                <div className="first-fivemod">
                    <Link to='/touchmodule'>
                        <img src={mod4} alt="" />
                        <h1>Touch</h1>
                    </Link>
                </div>
                <div className="first-fivemod">
                    <Link to='/speakingModule'>
                        <img src={mod5} alt="" />
                        <h1>Speaking</h1>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default FiveModules