import React from 'react';
import Logo from './logo/index';
import Breadcrumb from './breadcrumb/index';
import './style.css';

const Header = () =>
  <div className="container-header">
    <Logo />
    <Breadcrumb />
  </div>
;

export default Header;