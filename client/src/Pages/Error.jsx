import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import classes from './Error.module.css';

function Error404() {
  const navigate = useNavigate();

  return (
    <div className={classes.error}>
        <Button className={classes['error-btn']} onClick={() => navigate('/home')}>Go Back Home &rarr;</Button>
        <p>ERROR 404: PAGE NOT FOUND</p>
    </div>
  );
};

export default Error404;
