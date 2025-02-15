import React from 'react';
import '../styles/loader.css';
function loader({ fullscreen = true }) {
  return (
    <div className={`loader-container ${fullscreen && 'fullscreen'}`}>
      <span className="loader">Loading...</span>
    </div>
  );
}

export default loader;
