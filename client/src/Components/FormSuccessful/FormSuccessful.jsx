import React from 'react'

import LoadingSpinner2 from '../LoadingSpinner/LoadingSpinner';
import classes from './FormSuccessful.module.css';

export function FormError() {

  return(
    <div className={classes.error}><i className={`fa-solid fa-circle-exclamation ${classes['error-icon']}`}></i> <span>Form Submission Unsuccessful</span></div>
  );
}

function FormSuccessful() {
  return (
    <div className={`${classes.success}`}><i className={`fa-solid fa-circle-check ${classes['success-icon']}`}></i> <span>Form Successfully Submitted</span></div>
  );
}

export default FormSuccessful;
