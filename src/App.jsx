import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Components/Main';
import AudioTest from './pages/AudioTest'
import ThirdModule from './pages/ThirdModule'
import FragnmentModule from './pages/FragnmentModule'
import './App.css'
import FiveModules from './Components/FiveModules';
import Hearing from './pages/Hearing';
import FirstLearn from './pages/FirstLearn';
import SecondPage from './pages/SecondPage';
import Visionmodule from './Components/Visionmodule'
import Question from './pages/Ouestion1'
import FindTheFragnment from './pages/FindTheFragnment';
import SmellingTest from './pages/SmellingTest'
import TouchModule from './pages/TouchModule'
import SpeakingModule from './pages/SpeakingModule'
const App = () => {
  return (
    <BrowserRouter basename='/Dojohub'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/audio' element={<AudioTest />} />
        <Route path='/fivemodule' element={<FiveModules />} />
        <Route path='/hearing' element={<ThirdModule />} />
        <Route path='/fragnmentModule' element={<FragnmentModule />} />
        <Route path='/hearing-learn' element={<Hearing />} />
        <Route path='/vision-learn' element={<FirstLearn />} />
        <Route path='/secondlearn' element={<SecondPage />} />
        <Route path='/visionmodule' element={<Visionmodule />} />
        <Route path='/firstquiz' element={<Question />} />
        <Route path='/fragnment' element={<FindTheFragnment />} />
        <Route path='/smellingTest' element={<SmellingTest />} />
        <Route path='/touchmodule' element={<TouchModule />} />
        <Route path='/speakingModule' element={<SpeakingModule/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App