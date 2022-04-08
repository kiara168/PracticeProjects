import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";


function Player(props) {
  const audioElement = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
      
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  const onPlaying = () => {
    setCurrentTime(audioElement.current.currentTime);
    setSeekValue(
      (audioElement.current.currentTime / audioElement.current.duration) * 100
    );
  };

  return (
    <>
      <p>
        <div className="text-anim">
          <strong>Upcoming Song:</strong>
        </div>

        <div className="nextsong-details">
          <img
            src={props.songs[props.nextSongIndex].img_src}
            alt={props.songs[props.nextSongIndex].title}
            style={{ width: "4em", height: "auto" }}
          />
          <p>
            <b>{props.songs[props.nextSongIndex].title} </b>&nbsp; by &nbsp;
            <b>{props.songs[props.nextSongIndex].artist}</b> 
            {/* &nbsp; from album &nbsp;
            <b>{props.songs[props.nextSongIndex].album}</b> */}
          </p>
        </div>
      </p>
      
      <div className="music-player">
        <audio
          src={props.songs[props.currentSongIndex].src}
          ref={audioElement}
          onTimeUpdate={onPlaying}
        ></audio>

        <p>{currentTime}</p>
        <input
        className="slider"
          type="range"
          min="0"
          max="100"
          step="1"
          value={seekValue}
          onChange={(e) => {
            const seekto = audioElement.current.duration * (+e.target.value / 100);
            audioElement.current.currentTime = seekto;
            setSeekValue(e.target.value);
          }}
        />

        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />


        {/* need to figure out how to get these to work */}
        <div class="player__footer">
          <ul class="list list--footer">
            <li>
              <button  class="list__link" >
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </button>
            </li>

            <li>
              <button  class="list__link">
                <i class="fa fa-random" aria-hidden="true"></i>
              </button>
            </li>

            <li>
              <button  class="list__link">
                <i class="fa fa-undo" aria-hidden="true"></i>
              </button>
            </li>

            <li>
              <button  class="list__link">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
              </button>
            </li>
          </ul>
        </div>

        <h4>Music Player React </h4>
      </div>
    </>
  );
}
export default Player;