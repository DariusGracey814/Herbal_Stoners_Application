import React, { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Container from '../UI/Container/Container';
import GetDate from '../Date/Date';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { MobileTestimonial } from '../Testimonials/Testimonials';
import HerbalFooter from '../Footer/Footer';
import classes from './HomeContent.module.css';

const Location = lazy(() => import('../MapboxLocation/Location'));
const BannerSection = lazy(() => import('../BannerSection/BannerSection'));
const Testimonials = lazy(() => import('../Testimonials/Testimonials'));

function HomeContent({ heroVisible, setHeroVisible, introElementVisible, onSetIntroElementVisible }) {
  const [dateNodeVisible, setDateNodeVisible] = useState("");
  const dateNode = useRef();
  const introSection = useRef();

  const navigate = useNavigate();

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
  }

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        onSetIntroElementVisible(entry.isIntersecting);
      }, options)

      observer.observe(introSection.current);
  }, []);

  return (
    <main>
        {/* Intro Section */}
        <section className={classes['intro-section']} ref={introSection}>
            <Container>
                <GetDate introElementVisible={introElementVisible} />

                <h1 className={`${classes['intro-h1']} ${!introElementVisible ? null : classes.visible}`}>Welcome To Herbal Stoners, Serving Southeast Michigan Since 2018</h1>

                <div className={`${classes['intro-text--wrapper']} ${!introElementVisible ? null : classes.visible}`}>
                    <p className={classes['intro-text']}>
                    Herbal Stoners is a marijuana retailer, serving southeast Michigan since 2010. We offer in-store shopping, as well as curbside pick-up for individuals 21 and up. Online orders may also be picked up in-store.
                    </p>

                    <p className={classes['intro-text']}>
                    We’re currently serving Recreational/Adult-Use only, however medical patients will automatically receive *10% off regularly priced menu items! Select flower strains are weighed deli-style and packaged to order.
                    </p>
                </div>

                <p className={classes['intro-discount']}>*10% discount does not apply to specials</p>

                <Button className={`hero-btn--blue ${classes['intro-btn']}`} onClick={() => navigate("/menu", {replace: true})}>
                    View Menu
                </Button>
            </Container>
        </section>

        <Suspense fallback={<LoadingSpinner />}>
          {/* Banner Section */}
          <BannerSection />

          {/* Location Section */}
          <Location />

          {/* Testimonials */}
          <Testimonials />
          <MobileTestimonial />
        </Suspense>
    </main>
  );
};

export default HomeContent;
