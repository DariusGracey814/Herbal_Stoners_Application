import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Button } from 'react-bootstrap';

import Container from '../Components/UI/Container/Container';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import { ScrollTopMain } from '../Components/UI/ScrollToTop/ScrollToTop';
import { MobileTestimonial } from '../Components/Testimonials/Testimonials';
import classes from './AboutUs.module.css';

// Image
import BG from '../Assets/heroImages/weedBGMedium.jpg';

const Directory = lazy(() => import('../Components/UI/Directory/Directory'));
const BannerSection = lazy(() => import('../Components/BannerSection/BannerSection'));
const Testimonials = lazy(() => import('../Components/Testimonials/Testimonials'));

function AboutUs() {
  const [load, setLoad] = useState(true);
  const [background, setBackground] = useState(null);

  function pageLoad() {
    setLoad(false);
  };

  useEffect(() => {
    setBackground(BG);
    setTimeout(pageLoad, 1000);
  }, []);

  return (
    <>
        {load ? <LoadingSpinner /> :
        <section className={classes['about-us']}>
            <Suspense fallback={<LoadingSpinner />}>
                <Directory current="about Us" />
            </Suspense>

            {/* Background Heading */}
            <div className={classes['about-image']} style={{backgroundImage: `url(${background})`}}>
                <div className={classes.gradient}>
                    <h1 className={load ? "animate" : null}>About Us</h1>
                </div>
            </div>

            <Container>
                <div className={classes['aboutUs-content']}>
                    <div className={classes.content1}>
                        <h2 className={classes['para1-h2']}>Herbal Stoners - About Us
                        We Are a Recreational/Adult-Use Marijuana Retailer.
                        </h2>

                        <p className={classes.para}>
                        We are <a href="https://www.google.com/maps/place/10+S+Huron+St,+Ypsilanti,+MI+48197/@42.2406596,-83.6154334,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca83f543ce3a5:0x3c39b56146d39dc2!8m2!3d42.2406556!4d-83.6132447" target="_blank">located at 10 S Huron St.</a> in the downtown historic district of Ypsilanti. Founded in 2018, Herbal Stoners was the 3nd locally licensed marijuana provider in the state of Michigan and is locally owned and operated. We have been providing award-winning cannabis flower, concentrates, and edibles to our consumers for over 4 years. Our professional, caring, and knowledgeable staff house over 75 years of unmatched experience in the cannabis industry and will gladly assist you with finding the products that best meet your needs.
                        </p>
                    </div>

                    <div>
                        <h2 className={classes['para2-h2']}>Our Mission & Vision</h2>

                        <p className={classes.para}>
                        Our mission at Herbal Stoners is to provide consumers with the highest quality cannabis and cannabis products in an environment that is professional, yet comfortable, friendly, and safe. As a locally owned and operated business, we are pleased to be able to work closely with our neighboring businesses and the local community. We are available to answer any questions or address any concerns you may have.
                        </p>    
                    </div>

                    <Button className={`form-btn ${classes.btn}`} type='submit'>Shop Now &rarr;</Button>
                </div>
            </Container>

            <Suspense fallback={<LoadingSpinner />}>
                <BannerSection />
                <Testimonials />
                <MobileTestimonial />
            </Suspense>

            <ScrollTopMain />
        </section>
        }
    </>
  );
};

export default AboutUs;
