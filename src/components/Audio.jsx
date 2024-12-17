import React, { useEffect, useRef, useState } from 'react'

const Audio = () => {
    const Sources=['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3','https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'];
    const audioRef=useRef(null);
    const[index,setIndex]=useState(0);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
            audioRef.current.play();
        }
    }, [index]);
    const handlePlay=()=>{
        if(audioRef.current){
            audioRef.current.play();
        }
    }
    const handlePause=()=>{
        if(audioRef.current){
            audioRef.current.pause();
        }
    }
    const handleReset=()=>{
        if(audioRef.current){
            audioRef.current.currentTime = 0;
        }
    }
    const handlePrevious=()=>{
        if(index<=0){
            setIndex(Sources.length-1)
        }else{
            setIndex((prev)=>prev-1);
        }
    }
    const handleNext=()=>{
        if(index<Sources.length-1){
            setIndex((next)=>next+1);
        }else{
            setIndex(0);
        }
    }
  return (
    <div>
        <div>
            <audio ref={audioRef} src={Sources[index]}  />
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Audio