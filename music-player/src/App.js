import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
        "title": "2 You",
        "artist": "Mariah the Scientist",
        "album": "2 You",
        "img_src": "./songs-images/2-You.png",
        "src": "./songs/2_You.mp3"
    },
    {
        "title": "CAN'T TOUCH THIS",
        "artist": "BIA",
        "album": "FOR CERTAIN (Deluxe)",
        "img_src": "./songs-images/CAN'T-TOUCH-THIS.png",
        "src": "./songs/CAN_T_TOUCH_THIS.mp3"
    },
    {
        "title": "Candy Drip",
        "artist": "Lucky Daye",
        "album": "Candy Drip",
        "img_src": "./songs-images/Candy-Drip.png",
        "src": "./songs/Candy_Drip.mp3"
    },
    {
        "title": "Closer (freat. H.E.R)",
        "artist": "Saweetie and H.E.R.",
        "album": "Closer",
        "img_src": "./songs-images/Closer-(feat.-HER).png",
        "src": "./songs/Closer__feat__H_E_R__.mp3"
    },
    {
        "title": "Dead Man Walking",
        "artist": "Brent Faiyaz",
        "album": "Dead Man Walking",
        "img_src": "./songs-images/Dead-Man-Wallking.png",
        "src": "./songs/Dead_Man_Walking.mp3"
    },
    {
        "title": "Garden Party",
        "artist": "Masego and Big Boi and JID",
        "album": "Garden Party",
        "img_src": "./songs-images/Garden-Party.png",
        "src": "./songs/Garden_Party.mp3"
    },
    {
        "title": "Get Into It (Yuh)",
        "artist": "Doja Cat",
        "album": " Planet Her",
        "img_src": "./songs-images/Get-into-it(Yuh).png",
        "src": "./songs/Get_Into_It__Yuh_.mp3"
    },
    {
        "title": "I Hate U",
        "artist": "SZA",
        "album": "I Hate U",
        "img_src": "./songs-images/I-Hate-U.png",
        "src": "./songs/I_Hate_U.mp3"
    },
    {
        "title": "Iced Tea",
        "artist": "Joyce Wrice and KATRANADA",
        "album": "Iced Tea",
        "img_src": "./songs-images/Iced-Tea.png",
        "src": "./songs/Iced_Tea.mp3"
    },
    {
        "title": "jealousy (feat. rema)",
        "artist": "FKA twigs and Rema",
        "album": "CAPRISONGS",
        "img_src": "./songs-images/jealousy-(feat.-rema).png",
        "src": "./songs/jealousy__feat__rema_.mp3"
    },
    {
        "title": "keisha",
        "artist": "Yaya Bey",
        "album": "keisha",
        "img_src": "./songs-images/keisha.png",
        "src": "./songs/keisha.mp3"
    },
    {
        "title": "MERCEDES",
        "artist": "Brent Faiyaz",
        "album": "MERCEDES",
        "img_src": "./songs-images/MERCEDES.png",
        "src": "./songs/MERCEDES.mp3"
    },
    {
        "title": "NEON PEACH feat. Tyler, The Creator",
        "artist": "Snoh Aalegra and Tyler, The Creator",
        "album": "TEMPORARY HIGHS IN VIOLET SKYS",
        "img_src": "./songs-images/Neon-Peach-Feat.-Tyler-the-Creator.png",
        "src": "./songs/NEON_PEACH_feat__Tyler__The_Creator.mp3"
    },
    {
        "title": "No Love (with SZA)",
        "artist": "Summer Walker, SZA",
        "album": "Still Over It",
        "img_src": "./songs-images/No-Love-(with-SZA).png",
        "src": "./songs/No_Love__with_SZA_.mp3"
    },
    {
        "title": "Nobody But You",
        "artist": "Sonder and Jorja Smith",
        "album": "Nobody But You",
        "img_src": "./songs-images/Nobody-but-you.png",
        "src": "./songs/Nobody_But_You.mp3"
    },
    {
      "title": "Pasadena",
      "artist": "Tinashe, Buddy",
      "album": "Pasadena",
      "img_src": "./songs-images/Pasadena.png",
      "src": "./songs/Pasadena.mp3"
    },
    {
      "title": "Persuasive",
      "artist": "Doechii",
      "album": "Persuasive",
      "img_src": "./songs-images/Persuasive.png",
      "src": "./songs/Persuasive.mp3"
    },
    {
      "title": "pressure",
      "artist": "Orion Sun",
      "album": "Getaway",
      "img_src": "./songs-images/pressure.png",
      "src": "./songs/pressure.mp3"
    },
    {
      "title": "Raindrops (feat. Flo Milli)",
      "artist": "GoldLink and Flo Milli",
      "album": "Raindrops",
      "img_src": "./songs-images/Raindrops (feat.-Flo-Milli).png",
      "src": "./songs/Raindrops__feat__Flo_Milli_.mp3"
    },
    {
      "title": "Right Track (feat. Smino)",
      "artist": "Syd and Smino",
      "album": "Right Track",
      "img_src": "./songs-images/Right-Track(feat.-Smino).png",
      "src": "./songs/Right_Track__feat__Smino_.mp3"
    },
    {
      "title": "SAD GIRLZ LUV MONEY Remix",
      "artist": "Amaarae and Kali Uchis and Moliy",
      "album": "SAD GIRLZ LUV MONEY Remix",
      "img_src": "./songs-images/SAD-GIRLZ-LUV-MONEY-Remix.png",
      "src": "./songs/SAD_GIRLZ_LUV_MONEY_Remix__feat__Kali_Uchis_and_Moliy_.mp3"
    },
    {
      "title": "Slow Down",
      "artist": "VanJess",
      "album": "Slow Down",
      "img_src": "./songs-images/Slow-Down.png",
      "src": "./songs/Slow_Down.mp3"
    },
    {
      "title": "sorry",
      "artist": "UMI",
      "album": "sorry",
      "img_src": "./songs-images/sorry.png",
      "src": "./songs/sorry.mp3"
    },
]);

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  

  return (
    <div className="App">
      <div className="weirdShape"></div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;