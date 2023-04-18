import React from 'react';

import { Modal, Button } from 'react-bootstrap';
import classes from './HoursModal.module.css';

function HoursModal({ show, handlerClose }) {

  return (
    <>
        <Modal className={classes.hoursModal} show={show} onHide={handlerClose}>
            <Modal.Header>
                <div className={classes['modal-header']}>
                    <Modal.Title className={classes['hours-modal--title']}>Herbal Stoners - Hours</Modal.Title>
                    <Button className={classes['close-btn']} onClick={handlerClose}>&#10006;</Button>
                </div>
                    
            </Modal.Header>

            <Modal.Body>
                <div>
                    {/* Sunday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Sunday</p>
                        <p className={classes['hours-time']}>10pm - 9pm</p>
                    </div>
                    {/* Monday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Monday</p>
                        <p className={classes['hours-time']}>10am - 9am</p>
                    </div>
                    {/* Tuesday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Tuesday</p>
                        <p className={classes['hours-time']}>10am - 9am</p>
                    </div>
                    {/* Wednesday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Wednesday</p>
                        <p className={classes['hours-time']}>10am - 9am</p>
                    </div>
                    {/* Thursday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Thursday</p>
                        <p className={classes['hours-time']}>10am - 9am</p>
                    </div>
                    {/* Friday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Friday</p>
                        <p className={classes['hours-time']}>10am - 9am</p>
                    </div>
                    {/* Saturday */}
                    <div className={classes['hours-item']}>
                        <p className={classes['hours-weekday']}>Saturday</p>
                        <p className={classes['hours-time']}>10am - 9am</p>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
  );
}



export default HoursModal;
