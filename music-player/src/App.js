import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';

const App=()=> {
  const [state, setState] = useState([
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
        "artist": "Saweetie, H.E.R.",
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
        "artist": "Masego, Big Boi, JID",
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
        "artist": "Joyce Wrice, KATRANADA",
        "album": "Iced Tea",
        "img_src": "./songs-images/Iced-Tea.png",
        "src": "./songs/Iced_Tea.mp3"
    },
    {
        "title": "jealousy (feat. rema)",
        "artist": "FKA twigs, Rema",
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
        "artist": "Snoh Aalegra, Tyler, The Creator",
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
        "artist": "Sonder, Jorja Smith",
        "album": "Nobody But You",
        "img_src": "./songs-images/Nobody-but-you.png",
        "src": "./songs/Nobody_But_You.mp3"
    },

]);

  return (
    <div className="App">
      MusicPlayer
    </div>
  );
}

export default App;
