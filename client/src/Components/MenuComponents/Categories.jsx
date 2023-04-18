import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import classes from './Categories.module.css';

// Images 
import img1 from '../../Assets/Category/weedCategory.jpg';
import img2 from '../../Assets/Category/Extracts.jpg';
import img3 from '../../Assets/Category/VapesCategory.jpg';
import img4 from '../../Assets/Category/EdibleCategory.jpg';


function Categories() {
  const [cardInfo, setCardInfo] = useState([
    {img: img1, title: 'Flower', alt: 'marijuana bud up close', width: '135px', height: '105px', to: 'flower'},
    {img: img2, title: 'Extracts', alt: 'extract', width: '135px', height: '105px', to: 'extracts'},
    {img: img3, title: 'Vaporizers', alt: 'motor city marijuana vape', width: '135px', height: '105px', to: 'extracts'},
    {img: img4, title: 'Edibles', alt: 'marijuana brownie', width: '135px', height: '105px', to: 'edibles'}]);

  return (
    <div className={classes.categories}>
        <h1>Categories</h1>

        <div className={classes['category-wrapper']}>
            {cardInfo.map((info) => {
               return <Link key={uuid()} to={info.to} className={classes.link}>
                        <div className={classes.card}>
                          <p className={classes.shop}>Shop</p>
                          <p className={classes.title}>{info.title}</p>
                          <LazyLoadImage className={classes.img}
                          src={info.img}
                          alt={info.alt}
                          width={info.width}
                          height={info.height}
                          effect="blur"
                          ></LazyLoadImage>
                        </div>
                      </Link>
            })}
        </div>
    </div>
  );
};

export default Categories;
