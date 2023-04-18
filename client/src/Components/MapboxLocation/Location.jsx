import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Button } from 'react-bootstrap';

import logo from '../../Assets/stonedEmoji.png';
import classes from './Location.module.css';


function Location() {
  // Herbal Solution Marker Click State
  const [clickShop, setClickShop] = useState(false);
  const [infoWindow, setInfoWindow] = useState(false);

  // Map Container
  const containerStyle = {
    width: '100%',
    height: '90vh'
  }

  // Map center point
  const centerLocation = {
    lat: 42.240350,
    lng: -83.613400
  }

  // Custom Map Styles
  const options = {
    disableDefaultUI: true,
    zoom: true
  }

  // Create object using useLoadScript (returns loadState and loadError)
  const { isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (loadError) return "Error Loading Google Maps.";
  if (!isLoaded) return "Loading Maps...";

  // Open Info Window
  const openInfoWindow = () => {
    setInfoWindow(true);
  }

  // Close Info window
  const closeInfoWindow = () => {
      setInfoWindow(false);
  }

  return (
    <>
      <section className={classes.location}>
        <GoogleMap mapContainerStyle={containerStyle} zoom={18} center={centerLocation} options={options}>
            <Marker position={centerLocation} onClick={openInfoWindow} />
        </GoogleMap>

        {/* Show if marker clicked */}
        {infoWindow ? 
        <div className={classes['info-window']}>
          <div className={classes['info-heading--wrapper']}>
            <h2 className={classes['info-heading']}>Herbal Solutions <img className={classes.logo} src={logo} alt="herbal solutions logo" /></h2>

            <Button className={classes['info-btn']} onClick={closeInfoWindow}>&#x2715;</Button>
          </div>

          <p className={classes['info-text']}>10 S Huron St. Ypsilanti Michigan , 48197</p>

          <a className={classes['marker-directions']} href="https://www.google.com/maps/place/10+S+Huron+St,+Ypsilanti,+MI+48197/@42.2406596,-83.6154334,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca83f543ce3a5:0x3c39b56146d39dc2!8m2!3d42.2406556!4d-83.6132447" target="_blank">Get Directions</a>
        </div>  : null }   
      </section>
    </>
  );
}


export default React.memo(Location);
