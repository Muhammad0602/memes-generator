import React from 'react';
import trollFaceImage from '../images/troll-face.png';

export default function Header() {
  return (
    <header className="header">
      <img
        src={trollFaceImage}
        className="header--image"
        alt="troll face"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Create Fun Memes with React</h4>
    </header>
  );
}
