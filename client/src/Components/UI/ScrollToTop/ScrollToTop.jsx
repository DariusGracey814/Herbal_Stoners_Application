import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

import classes from './ScrollToTop.module.css';

// Smooth scroll
const smoothScroll = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function ScrollTopMain({elementVisible}) {
    return (
        <Button className={`${classes['up-btn']} ${elementVisible ? classes.hide : null} `} onClick={smoothScroll} aria-label="Scroll to top of page">
            <i className={`fa-solid fa-circle-chevron-up ${classes['up-icon']}`}></i>
        </Button>
  );
}


function ScrollToTop({ hero, onSetHeroVisible }) {
    const [elementVisible, setElementVisible] = useState("");

    // Hide Scroll btn if we are on hero intersection
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementVisible(entry.isIntersecting);
            onSetHeroVisible(entry.isIntersecting);
        }, options)

        observer.observe(hero.current);
    }, [])
    
    return (
        <Button className={`${classes['up-btn']} ${elementVisible ? classes.hide : null}`} onClick={smoothScroll} aria-label="Scroll to top of page">
            <i className={`fa-solid fa-circle-chevron-up ${classes['up-icon']}`}></i>
        </Button>
  );
};

export default ScrollToTop;
