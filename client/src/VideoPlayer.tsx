import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css';

const VideoPlayer: React.FC = () => {
  return (
    <div className="video-player-wrapper">
      <ReactPlayer
        url="http://localhost:3000/video"
        controls
      />
    </div>
  );
}

export default VideoPlayer;
