import React, { useRef, useState } from "react";
import DrillingAudio from "../assets/drillingAudio.mp3";
import BoringAudio from "../assets/drillingAudio.mp3";
import Audio1 from "../assets/drillingAudio.mp3"; // Ensure this is unique
import Audio2 from "../assets/drillingAudio.mp3"; // Ensure this is unique
import Audio3 from "../assets/drillingAudio.mp3"; // Ensure this is unique
import { Link } from "react-router-dom";
import logo from "../assets/Screenshot 2025-03-10 221747.png"; // Ensure this is the correct path
import "./Hearing.css";

const Hearing = () => {
  const drillingAudioRef = useRef(null);
  const boringAudioRef = useRef(null);
  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);
  const audio3Ref = useRef(null);

  const [drillingState, setDrillingState] = useState({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
  });

  const [boringState, setBoringState] = useState({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
  });

  const [audio1State, setAudio1State] = useState({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
  });

  const [audio2State, setAudio2State] = useState({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
  });

  const [audio3State, setAudio3State] = useState({
    currentTime: 0,
    duration: 0,
    isPlaying: false,
  });

  const togglePlayPause = (audioRef, state, setState) => {
    if (state.isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setState({ ...state, isPlaying: !state.isPlaying });
  };

  const seekAudio = (e, audioRef, state, setState) => {
    const seekTime = (e.target.value / 100) * state.duration;
    audioRef.current.currentTime = seekTime;
    setState({ ...state, currentTime: seekTime });
  };

  const onLoadedMetadata = (audioRef, setState) => {
    setState((prev) => ({
      ...prev,
      duration: audioRef.current.duration,
    }));
  };

  const updateTime = (audioRef, setState) => {
    setState((prev) => ({
      ...prev,
      currentTime: audioRef.current.currentTime,
    }));
  };

  const renderAudioContainer = (title, audioRef, state, setState, src) => (
    <div className="audio-container">
      <h3>{title}</h3>
      <audio
        ref={audioRef}
        src={src}
        onLoadedMetadata={() => onLoadedMetadata(audioRef, setState)}
        onTimeUpdate={() => updateTime(audioRef, setState)}
      />
      <div className="controls">
        <div className="progress-bar">
          <input
            type="range"
            min="0"
            max="100"
            value={
              state.duration > 0
                ? (state.currentTime / state.duration) * 100
                : 0
            }
            onChange={(e) => seekAudio(e, audioRef, state, setState)}
          />
        </div>
        <button style={{backgroundColor:"white"}}
          className="control backward"
          onClick={() => (audioRef.current.currentTime -= 10)}
        >
          &#x23EA;
        </button>
        <button
          className="control play-pause" style={{backgroundColor:"white"}}
          onClick={() => togglePlayPause(audioRef, state, setState)}
        >
          {state.isPlaying ? "⏸️" : "▶️"}
        </button>
        <button style={{backgroundColor:"white"}}
          className="control forward"
          onClick={() => (audioRef.current.currentTime += 10)}
        >
          &#x23E9;
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="first">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "100px", height: "100px", marginTop: "-20px" }}
        />
        <p>Hearing / Sound Identification / Learn</p>
      </div>
      <div className="main-learn">
        <div className="exit-btn">
          <Link to="/">Exit</Link>
        </div>
      </div>
      {renderAudioContainer(
        "Sound of Drilling Machine",
        drillingAudioRef,
        drillingState,
        setDrillingState,
        DrillingAudio
      )}
      {renderAudioContainer(
        "Sound of Boring Machine",
        boringAudioRef,
        boringState,
        setBoringState,
        BoringAudio
      )}
      {renderAudioContainer(
        "Sound of Drilling Machine",
        audio1Ref,
        audio1State,
        setAudio1State,
        Audio1
      )}
      {renderAudioContainer(
        "Sound of Drilling Machine",
        audio2Ref,
        audio2State,
        setAudio2State,
        Audio2
      )}
      {renderAudioContainer(
        "Sound of Drilling Machine",
        audio3Ref,
        audio3State,
        setAudio3State,
        Audio3
      )}
      <div className="buttons">
        <Link to="/hearing" className="button" style={{ textDecoration: "none" }}>
          Take test
        </Link>
      </div>
    </>
  );
};

export default Hearing;
