import './MainPage.scss'
import React from 'react';
import { type Video } from '../Video/typeVideo.ts'
import VideoComponent from '../Video/Video.tsx'

type props = {
  videos : Video[]
}

const MainPage = ({ videos } : props) => {
  return(
    <main id="main_page">
      {videos?.map(video => {
        <VideoComponent key={video.id} name={video.name} backgroundUrl={video.backgroundUrl}/>
      })}
    </main>
  )
}

export default MainPage
