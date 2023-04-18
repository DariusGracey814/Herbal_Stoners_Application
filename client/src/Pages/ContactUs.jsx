import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Form, Button } from 'react-bootstrap';

import Container from '../Components/UI/Container/Container';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { LoadingSpinner3 } from '../Components/LoadingSpinner/LoadingSpinner';
import { ScrollTopMain } from '../Components/UI/ScrollToTop/ScrollToTop';
import background from '../Assets/heroImages/weedBGMedium.jpg';
import classes from './ContactUs.module.css';

const Directory = lazy(() => import('../Components/UI/Directory/Directory'));
const BannerSection = lazy(() => import('../Components/BannerSection/BannerSection'));

function ContactUs() {
    const [load, setLoad] = useState(false);
    const [image, setImage] = useState(null);
    const [customerContacts, setCustomerContacts] = useState([]);
    const [onlineStatus, setOnlineStatus] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    console.log(customerContacts);

    // Form Fields
    const userName = useRef();
    const userNumber = useRef();
    const userEmail = useRef();
    const userMessage = useRef();
    
    function pageLoad() {
        setLoad(true);
    };

    useEffect(() => {
        setImage(background);
        setOnlineStatus(window.navigator.onLine);
        setTimeout(pageLoad, 1000);
    }, []);


    // When form is submitted run spinner for 1.5 sec
    useEffect(() => {
        setTimeout(() => {
            setSubmitted(false);
        }, 1500)
    }, [submitted])

    // On Submit of User Contact Message 
    const contactInformation = (evt) => {
        evt.preventDefault();
        
        if(onlineStatus) {
            const contactData = {
                name: userName.current.value,
                number: userNumber.current.value,
                email: userEmail.current.value,
                message: userMessage.current.value
            };
            
            // Save Contact form data information to an data array
            setCustomerContacts((prevData) => [contactData, ...prevData]);
            setSubmitted(true);

            // Clear Form Fields
            userName.current = '';
            userNumber.current = '';
            userEmail.current = '';
            userMessage.current = '';
        }
    } 

    return (
        <>
            {!load ? <LoadingSpinner /> : 
            <section className={classes.contact}>
                <Suspense fallback={<LoadingSpinner3 />}>
                    <Directory current="contact Us" />
                </Suspense>

                {/* Contact us Icons */}
                <div className={classes['contact-wrapper']} style={{backgroundImage: `url(${image})`}}>
                    <div className={classes.overlay}>
                        <Container>
                            <h1 className={classes['contact-heading']}>Contact Us</h1>
                            <div className={classes.content}>
                                <div className={classes['icon-content']}>
                                    <i className={`fa-solid fa-location-dot ${classes.icon}`}></i>
                                    <p className={classes.heading}>Find Us</p>
                                    <p className={classes.text}><a href="https://www.google.com/maps/place/10+S+Huron+St,+Ypsilanti,+MI+48197/data=!4m2!3m1!1s0x883ca83f543ce3a5:0x3c39b56146d39dc2?sa=X&ved=2ahUKEwjx_prshLH5AhVcpokEHXk_BC0Q8gF6BAgMEAE" target="_blank">10 S Huron St. Ypsilanti Michigan , 48197</a></p>
                                </div>

                                <div className={classes['icon-content']}>
                                    <i className={`fa-solid fa-phone-flip ${classes.icon}`}></i>
                                    <p className={classes.heading}>Call Us</p>
                                    <p className={classes.text}><a href="tel:7344868321">734-486-8321</a></p>
                                </div>

                                <div className={`${classes['icon-content']} ${classes.stretch}`}>
                                    <i className={`fa-solid fa-envelope ${classes.icon}`}></i>
                                    <p className={classes.heading}>Email Us</p>
                                    <p className={classes.text}><a href="mailto:contact@herbalstoners.com">contact@herbalstoners.com</a></p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

                {/* Contact Us Content */}
                <Container>
                    <div className={classes['contactUs-content']}>
                        <div className={classes.col1}>
                            <h1 className={classes['contactUs-h1']}>Recreational/Adult-Use Marijuana Retailer in Ypsilanti, Michigan Since 2018</h1>

                            <p className={classes['contactUs-text']}>
                                Do you have questions about our services, products, etc? Use the form on this page to send us your message and a member of our knowledgeable staff will respond as soon as possible. Of course, you can always call us at <a href="tel:734-487-8421">734-487-THC1 (8421)</a> during normal business hours - <span>We would love to hear from you!</span>
                            </p>
                        </div>

                        {/* Form */}
                        <div className={classes.col2}>
                           {submitted ? <LoadingSpinner3 /> :
                            <Form onSubmit={contactInformation}>
                            <p className={classes.required}>* = required</p>

                            <Form.Group className={classes['form-wrapper']}controlId='username'>
                                    <Form.Label>First & Last Name</Form.Label>
                                    <Form.Control type="text" ref={userName} required />
                                    <i className={`fa-solid fa-user ${classes['form-icon']}`}></i>
                            </Form.Group>

                            <Form.Group className={classes['form-wrapper']}controlId='userNum'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="tel" ref={userNumber} required />
                                    <i className={`fa-solid fa-phone-flip ${classes['form-icon']}`}></i>
                            </Form.Group>

                            <Form.Group className={classes['form-wrapper']}controlId='eml'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" ref={userEmail} required />
                                    <i className={`fa-solid fa-envelope-open ${classes['form-icon']}`}></i>
                            </Form.Group>

                            <Form.Group className={classes['form-wrapper']}controlId='username'>
                                    <Form.Label>Enter Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} type="text" ref={userMessage} />
                                    <i className={`fa-solid fa-pen ${classes['form-icon']}`}></i>
                            </Form.Group>

                            <Button className={`form-btn ${classes.btn}`} type='submit'>Send Message &rarr;</Button>
                            </Form>
                           }
                        </div>
                    </div>
                </Container>

                <Suspense fallback={<LoadingSpinner />}>
                    <BannerSection />
                </Suspense>

                <ScrollTopMain />
            </section>
            }
        </>
    );
};

export default ContactUs;
