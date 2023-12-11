import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Applications from './Components/Applications';
import Posts from './Components/Posts';
import Friends from './Components/Friends';

function App() {
  const [showFriends, setShowFriends] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setShowFriends(window.innerWidth > 768);
    };

    handleOrientationChange(); // Initial check and set the initial state

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className="parent">
      <NavBar showFriends={showFriends} setShowFriends={setShowFriends} />
      <div className="container-fluid text-center">
        <section className="row">
          <Applications />
          <Posts />
          <Friends showFriends={showFriends} />
        </section>
      </div>
    </div>
  );
}

export default App;
