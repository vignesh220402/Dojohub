import React from 'react'
import Logo from '../assets/1.png'
import { Link } from 'react-router-dom';
import './Main.css'
const Main = () => {
    return (
        <>
            <div className="top-main">
                <div className="main-div">
                    <img src={Logo} alt="" />
                    <div className="mydiv">
                        <Link to="/fivemodule">Get Strated</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main