import React from 'react';
import ReactPlayer from "react-player"

const VideoBackground = () => {
  return (
    <ReactPlayer autoPlay muted loop controls
      url="https://player.vimeo.com/video/794974580"
      width= "100%"
      height= "70%"
    />
  );
};

export default VideoBackground;
