import React from 'react'
import { type Video } from './typeVideo.ts'

const VideoComponent = ( {id , name , timeInSeconds, backgroundUrl} : Video ) => {
  return(
    <div className="video_component" style={{"--background-url" : `url(${backgroundUrl})`} as React.CSSProperties}>
      <p>{name}</p>
    </div>
  )
}

export default VideoComponent
