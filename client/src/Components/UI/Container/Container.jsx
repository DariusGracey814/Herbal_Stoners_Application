import React from 'react';

import classes from './Container.module.css';

export function HeaderContainer(props) {
  return (
    <div className={classes['header-container']}>{props.children}</div>
  );
};

export function ContainerXL(props) {
  return (
    <div className={classes.containerXL}>{props.children}</div>
  );
};

function Container(props) {
  return (
    <div className={classes.container}>{props.children}</div>
  );
};


export default Container;
