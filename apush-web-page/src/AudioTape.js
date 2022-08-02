import { AiFillSound } from "react-icons/ai";
import { Howl } from 'howler';
import React, { useEffect } from 'react';

const AudioTape = () => {
    const audioClip = {sound: "/Name Pronunciation.wav", label: "Pronunciation"}
    const sound = new Howl({
        src: audioClip.sound,
        html5: true
    });

    const playPronunciationTape = () => {
        sound.play();
    }

    return (
        <>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                <AiFillSound style={{fontSize: "40px", marginRight: "20px", verticalAlign: "top"}}/><button onClick={playPronunciationTape} style={{border: "none", background: "blue", color: "white", borderRadius: "2px", fontSize: "25px"}}>Click for Pronunciation</button><h5 style={{fontSize: "40px", color: "red"}}>3s</h5>
            </div>
        </>
    )
}

export default AudioTape;
