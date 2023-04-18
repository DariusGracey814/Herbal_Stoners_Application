import React, { useState, useCallback } from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';

import { HeaderContainer } from '../Container/Container';
import logo from '../../../Assets/stonedEmoji.png';
import classes from './Navbar.module.css';

function Navbar({ onSetNavActive }) {
   const [showNav, setShowNav] = useState(false);
   const [ariaExpanded, setAriaExpanded] = useState(false);

  // Toggle Mobile Navigation
  const toggleMenuHandler = (evt) => {
    const mobileNavigation = evt.target;

    if (!mobileNavigation) {return; }

    // Update States
    setShowNav((prevState) => !prevState);
  }
  
  // Memoized nav state henders re-renders for api data being reloaded  
  useCallback(() => {
    setAriaExpanded((prevState) => !prevState);
    onSetNavActive(showNav);
  }, [showNav]);

  return (
    <HeaderContainer>
        <nav className={classes.nav}>
            {/* Logo */}
            <NavLink to='/home' className={classes['logo-wrapper']}>
                <p className={classes['logo_text']}>Herbal Stoners</p>
                <img className={classes.logo} src={logo} loading="lazy" alt="herbal stoners logo" />
            </NavLink>

            {/* Mobile Navigation */}
            <button className={classes['menu-btn']} aria-label="navigation" aria-controls="navList" aria-expanded={ariaExpanded} onClick={toggleMenuHandler}>
                {!showNav ?  <i className={`fa-solid fa-bars ${classes['mobile-nav']}`}></i> : 
                <i className={`fa-solid fa-xmark ${classes['mobile-nav--close']}`}></i>
                }
            </button>


            <div id="navList" className={(!showNav)? `${classes['nav-content']}` : `${classes['nav-content']} ${classes['show-nav']}`}>
                
                <ul className={classes['navbar-list']}>
                    <li className={classes['nav-item']}>
                        <NavLink to="/home" className={isActive => (isActive.isActive) ? classes.active : ''}>Home</NavLink>
                    </li>
                    <li className={classes['nav-item']}>
                        <NavLink to="/menu" className={isActive => (isActive.isActive) ? classes.active : ''}>Menu</NavLink>
                    </li>
                    <li className={classes['nav-item']}>
                        <NavLink to="/about-us" className={isActive => (isActive.isActive) ? classes.active : ''}>About Us</NavLink>
                    </li>
                    <li className={classes['nav-item']}>
                        <NavLink to="/subscribe" className={isActive => (isActive.isActive) ? classes.active : ''}>Subscribe</NavLink>
                    </li>
                    <li className={classes['nav-item']}>
                        <NavLink to="/contact-us" className={isActive => (isActive.isActive) ? classes.active : ''}>Contact Us</NavLink>
                    </li>
                </ul>

                {/* Call us */}
                <div className={classes['number-wrapper']}>
                    <p className={classes['call-us']}>Call Us <i className={`fa-solid fa-phone-flip ${classes['phone-icon']}`}></i></p>
                    <p><a href="tel:734-486-THC1" className={classes.number}>734-486-THC1 (8321)</a></p> 
                </div>
            </div>
        </nav>
    </HeaderContainer>

  );
};

export default Navbar;
