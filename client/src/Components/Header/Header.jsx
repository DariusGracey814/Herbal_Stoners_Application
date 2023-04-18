import React, { useEffect } from 'react'

import Navbar from '../UI/Navbar/Navbar';
import classes from './Header.module.css';

function Header({ onSetNavActive, heroVisible }) {

  return (
    <header className={`${classes.header}`}>
        <Navbar onSetNavActive={onSetNavActive} heroVisible={heroVisible} />
    </header>
  )
}

export default Header;
