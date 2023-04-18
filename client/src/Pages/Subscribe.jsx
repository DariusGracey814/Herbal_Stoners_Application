import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import Directory from '../Components/UI/Directory/Directory';
import Container from '../Components/UI/Container/Container';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { LoadingSpinner3 } from '../Components/LoadingSpinner/LoadingSpinner';
import { ScrollTopMain } from '../Components/UI/ScrollToTop/ScrollToTop';
import classes from './Subscribe.module.css';

// Image
import background from '../Assets/heroImages/weedBGMedium.jpg';

const BannerSection = lazy(() => import('../Components/BannerSection/BannerSection'));


function Subscribe() {
  const [load, setLoad] = useState(false);
  const [formSpinnerDuration, setFormSpinnerDuration] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subscriptions, setSubscriptions] = useState([]);
  const [bgImage, setBGImage] = useState(null);

  // Dom Ref
  const firstName = useRef();
  const lastName = useRef();
  const userEmail = useRef();
   
  // Updating State
  function pageLoad() {
    setLoad(true);
  };

  // Storing image on initial page render  
  useEffect(() => {
    setBGImage(background);

    setTimeout(pageLoad, 1000);
  }, []);
  
  // Form Submission Success State
  useEffect(() => {
    setTimeout(() => {
        setFormSubmitted(false);
    }, 2000);
  }, [formSubmitted])

  // Subscribe Form
  const submitSubscribeForm = (evt) => {
    evt.preventDefault();

    // If user is online submit form
        const userInfo = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            userEmail: userEmail.current.value
        }
        setSubscriptions(prevData => [userInfo, ...prevData]);

        // Set Form Spinner Duration
        setFormSubmitted(true);
        
        // Clear Form Fields
        firstName.current.value = "";
        lastName.current.value = "";
        userEmail.current.value = "";
        console.log('Form Submitted');
    }

  return (
   <>
   {/* If load is false run spinner until load dispatch is set top true */}
   {!load ? <LoadingSpinner /> : 
    <section className={classes.subscribe} style={{backgroundImage: `url(${bgImage})`}} aria-label="Marijuana leaves background">
        <div className={classes.overlay}>
            <Directory current="subscribe" />

            <Container>
                <div className={classes['subscribe-content']}>
                    <div className={classes['subscribe-text']}>
                        <h1>Subscribe To Our Newsletter Be the First to Know About New Products, Specials, & Events!
                        </h1>

                        <p className={classes.text}>
                        We'll also send links to helpful articles and we give you a peek into some of our favorite products in stock. Your privacy is extremely important to us, we will NEVER share your email address or personal info.
                        </p>
                    </div>

                    {/* Form */}
                    <div className={classes['form-wrapper']}>
                        {/* If user submit true run form submission load for 1.sec than return to form UI */}
                        {formSubmitted ? <LoadingSpinner3 /> :
                         <Form className={classes.form} onSubmit={submitSubscribeForm}>
                            <p className={classes.required}>* = required</p>
                            <Form.Group className="mb-3" controlId="fname">
                                <Form.Control className={classes['form-input']} type="text" placeholder="Firstname*" required ref={firstName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="lname">
                                <Form.Control className={classes['form-input']} type="text" placeholder="Lastname*" required ref={lastName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="eml">
                                <Form.Control className={classes['form-input']} type="email" placeholder="Email*" required ref={userEmail} />
                            </Form.Group>

                            <Button className="form-btn" type='submit'>Subscribe</Button>
                        </Form>
                        }
                    </div>
                </div>
            </Container>
        </div>
    </section>
   }

    {/* Banners */}
    <Suspense fallback={<LoadingSpinner3 />}>
        <BannerSection />
    </Suspense>

    <ScrollTopMain />
   </>
  );
};

export default Subscribe;
