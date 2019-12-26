import React from 'react';
import './style.css';

const url = "https://static-s.aa-cdn.net/img/ios/1383205805/818d0270b20ba3f5ff281a4b8160fa7f?v=1";

const Logo = () =>
  <div className="container-logo">
    <img src={url} alt="logo"></img>
  </div>
  ;

export default Logo;