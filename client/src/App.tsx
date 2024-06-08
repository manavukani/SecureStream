import React from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Video Streaming App</h1>
      </header>
      <main className="video-container">
        <VideoPlayer />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Manav Ukani</p>
      </footer>
    </div>
  );
}

export default App;
