import React from 'react';

const VideoBackground = () => {
    return (
      <iframe id= "video" src="https://player.vimeo.com/video/794974580?background=1"
      width= "100%"
      height= "70%"
      title="Video player for Vimeo video"
      autoloop="true" autoPlay >
      </iframe>
    );
  };

export default VideoBackground;