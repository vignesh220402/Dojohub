import React from 'react'
import Logo from '../assets/Screenshot 2025-03-10 221747.png'
import hearing from '../assets/OIP (1).jpeg'
import { Link } from "react-router-dom"
import '../pages/ThirdModule.css'
const visionModule = () => {
  return (
    <>
      <div className="first">
        <img src={Logo} alt="" style={{ width: "100px", height: "100px", marginTop: "-20px" }} />
      </div>
      <div className="exit-btn">
        <Link to='/'>Exit</Link>
      </div>
      <div className="total-topic">
        <div className="vision-topic">
          <div className="sectences">
            <h3>SMELLING MODULE</h3>
            <h4>CHOOSE A SECTION</h4>
          </div>
        </div>
        <div className="four-div">
          <div className="inner-div">
            <img src={hearing} className='sound-Ide' alt="" / >
            <p>Sound Identification</p>
            <h4>This module helps in recognizing components, understanding their functions and their applications.</h4>
            <div className="learn-test">
              <Link to="/">Learn</Link>
              <Link to="/">Take test</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/fivemodule" className='button' style={{textDecoration:"none"}}>Back</Link>
      </div>
    </>
  )
}

export default visionModule
