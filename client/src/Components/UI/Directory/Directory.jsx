import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

import classes from './Directory.module.css';

export function Directory3({ current, main, location }) {
  return (
    <div className={classes['site-placement']}>
      <Container>
          <div>
              <Link className={classes['link-base']} to="/home">home</Link> <span className={classes.divide}>/</span> <Link to={location} className={classes['link-base']}>{main}</Link> <span className={classes.divide}>/</span> <span className={classes['link-active']} to="/">{current}</span>
          </div>
      </Container>
    </div>
  );
};

function Directory({ current }) {
  return (
    <div className={classes['site-placement']}>
      <Container>
          <div>
              <Link className={classes['link-base']} to="/home">home</Link> <span className={classes.divide}>/</span> <span className={classes['link-active']} to="/">{current}</span>
          </div>
      </Container>
    </div>
  );
};

export default Directory;
