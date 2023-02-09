import React from 'react';
import ReactPlayer from "react-player"

const VideoBackground = () => {
    return (
      <ReactPlayer autoPlay muted loop controls
        url="https://player.vimeo.com/video/794974580?autoplay=1&loop=1?muted=1"
        width= "100%"
        height= "70%"
      />
    );
  };

export default VideoBackground;
