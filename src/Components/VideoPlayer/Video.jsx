import React, { useRef } from 'react'
import "./Video.css"
import video from '../../assets/vvvv.mp4'
import poster from '../../assets/poster.jfif'
const Video = ({playState,setPlayState}) => {

const player = useRef(null);
const closePlayer = (e)=>{
if(e.target === player.current)
{
    setPlayState(false);
}
}

  return (
    <div className={`video-playar ${playState?'':'hide'}`}ref={player} onClick={closePlayer}>
      <video src={video} controls  poster={poster} > </video>
    </div>
  )
}

export default Video
