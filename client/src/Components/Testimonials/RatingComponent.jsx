import React from 'react'

import classes from './RatingComponent.module.css';

function RatingComponent() {
    return (
        <div className={classes['star-container']}>   
            <i className={`fa-solid fa-star ${classes.star}`}></i>
            <i className={`fa-solid fa-star ${classes.star}`}></i>
            <i className={`fa-solid fa-star ${classes.star}`}></i>
            <i className={`fa-solid fa-star ${classes.star}`}></i>
            <i className={`fa-solid fa-star ${classes.star}`}></i>
        </div>
    );
}

export default RatingComponent;
