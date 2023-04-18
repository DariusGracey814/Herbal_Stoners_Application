import React from 'react';

import classes from './MenuBanner.module.css';

function MenuBanner() {
  return (
    <div className={classes['banner-wrapper']}>
        <div className={classes.banner}>
            {/* Top Content */}
            <p className={classes.head}>We are now open for in-store shopping!</p>

            <p className={`${classes.para1} ${classes.text}`}>
            Herbal Stoners is now open for medical and recreational sales for individuals 21 years of age and older. Medical patients will automatically receive 10% off all regularly priced menu items! Select flower strains are weighed deli-style and packaged to order.
            </p>

            <p className={`${classes.text}`}>
                Online orders can either be picked up in-store or curbside.
            </p>
            <p className={`${classes.text} ${classes.para3}`}>
                *10% discount does not apply to specials
            </p>

            <p className={`${classes.text}`}>
                For curbside pickup, you must be parked in the first four parking spaces. If space is unavailable, you may walk in for in-store pickup.
            </p>
            <p className={`${classes.text} ${classes.divide}`}></p>

            {/* Flower */}
            <div className={classes.flower}>
                <p className={classes.heading}>Flower</p>
                <ul className={classes['category-list']}>
                    <li>
                        <p className={classes['category-text']}>Hytek - <span>All flower 50% off</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Pro Go - <span>Buy any 1/4oz of Pro Gro get a 1g pre roll for $0.01</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Society C - <span>11% off Grape Cream Cake, Oreoz, and Platinum Cake</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Weedys - <span>13% off Lime Juice</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Uplyfted Cannabis Co. - <span>11% off Black Banana</span></p>
                    </li>
                </ul>
            </div>


            {/* Extracts */}
            <div className={classes.extracts}>
                <p className={classes.heading}>Extracts</p>
                <ul className={classes['category-list']}>
                    <li>
                        <p className={classes['category-text']}>Element - <span>25% off all cartridges</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Motor City Cannabis - <span>$15 each or 8 for $100 (price will be adjusted upon arrival)</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Platinum Vape - <span> $15 each or 7 for $100</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Element- <span>25%-40% off select concentrates</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Rkive Reserve - <span>15% off all concentrates</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Kola - <span>30% off solventless concentrates | 20% off live resin diamonds & sauce</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>True North Collective - <span>50% off sugar sauce</span></p>
                    </li>
                </ul>
            </div>

            {/* Edibles */}
            <div className={classes.edibles}>
                <p className={classes.heading}>Edibles</p>
                <ul className={classes['category-list']}>
                    <li>
                        <p className={classes['category-text']}>Motor City Cannabites - <span>20% off crispy treats</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Rise THC Tincture - <span>35% off</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Tommy Chong's Edibles - <span>$8.00</span></p>
                    </li>
                    <li>
                        <p className={classes['category-text']}>Ubaked Blueberry Maple Canna-Bar - <span>20% off</span></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default MenuBanner;
