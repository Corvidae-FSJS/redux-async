import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <h1>The X-Files Character Gallery</h1>
    <Link to="/">Home</Link>
    <div>
      <audio src='../assets/xsound.mp3' controls autoPlay />
    </div>
  </header>
);

export default Header;
