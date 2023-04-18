import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Carousel, Card } from 'react-bootstrap';

import Container from '../UI/Container/Container';
import RatingComponent from './RatingComponent';
import classes from './Testimonials.module.css';

import testimonialImage from '../../Assets/testimonial/testimonalBG.jpg';

export function MobileTestimonial() {
  return (
        <div className={`${classes['mobile-card']} ${classes.show}`}>
          <Card className={classes.card}>
            <Card.Body>
              <Card.Title className={classes['mobile-heading']}>Best quality flower in Eastern Michigan Area <RatingComponent /></Card.Title>
              <Card.Text>
                  <p className={classes.user}>Amanda_Stoned</p>
                  <p className={classes.date}> - 2 weeks ago</p>
                  <p className={classes['testimonials-text']}>
                  I highly recommend. This dispensary has some of thebest quality flower in the eastern Michigan area. Bignugs, kept fresh, and a reward program.  Even the cheapflower is decent. My go to and I stay in Detroit.
                  </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
  );
}


function Testimonials() {
  const [index, setIndex] = useState(0);
  const [testimonialVisible, setTestimonialVisible] = useState("");
  const [testimonialBG, setTestimonialBG] = useState(null);
  const testimonials = useRef();

  useEffect(() => {
    setTestimonialBG(testimonialImage);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setTestimonialVisible(entry.isIntersecting);
    }, options);

    observer.observe(testimonials.current);
  }, []);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  return (
     <section  section className={classes.testimonials} ref={testimonials}>
       <h1 className={`${classes['testimonials-h1']} ${!testimonialVisible ? null : classes.visible}`}>Listen to Our Satisfied Customers</h1>

       <div className={`${classes['carousel-wrapper']} ${classes.hide}`} style={{backgroundImage: `url(${testimonialBG})`}} aria-label="weed bud with dense crystals and vibrant orange and purple fibers"> 

          <Carousel className={classes.carousel} activeIndex={index} onSelect={handleSelect} alt="up close weed bud">
              <Carousel.Item className={classes['testimonial-content']}>
                <div className={'carousal-item'}>
                  <h3 className={classes['testimonials-heading']}><q>The staff is AMAZINGLY kind & helpful.</q> <RatingComponent /></h3>
                  <p className={classes.user}>Tayrod223</p>
                    <p className={classes.date}> - 1 months ago</p>
                  <p className={classes['testimonials-text']}>I have been a medical card holder for many years & gone to many other dispensaries. H.S. is where I return every time. The staff is AMAZINGLY kind & helpful. The nicest I’ve had at any dispensary. The product is exactly as advertised and always great quality.</p>
                </div>
              </Carousel.Item>

              <Carousel.Item className={classes['testimonial-content']}>
                  <div className={'carousal-item'}>
                    <h3 className={classes['testimonials-heading']}><q>Best service in town!</q> <RatingComponent/></h3>
                    <p className={classes.user}>Alise_K</p>
                    <p className={classes.date}> - 2 months ago</p>
                    <p className={classes['testimonials-text']}>Been going here for years!! Best service in town!! Always have what they advertise with no games and gimmicks like the rest of the dispos around!! Good deals and prices!! Staffs always friendly and professional!! Definitely recommend</p>
                  </div>
              </Carousel.Item>

              <Carousel.Item className={classes['testimonial-content']}>
                  <div className={'carousal-item'}>
                    <h3 className={classes['testimonials-heading']}><q>Best quality flower in eastern Michigan...</q> <RatingComponent /></h3>
                    <p className={classes.user}>Amanda_Stoned</p>
                    <p className={classes.date}> - 2 weeks ago</p>
                    <p className={classes['testimonials-text']}>
                    I highly recommend. This dispensary has some of the best quality flower in the eastern Michigan area. Big nugs, kept fresh, and a reward program.  Even the cheap flower is decent. My go to and I stay in Detroit.
                    </p>
                  </div>
              </Carousel.Item>

              <Carousel.Item className={classes['testimonial-content']}>
                  <div className={'carousal-item'}>
                    <h3 className={classes['testimonials-heading']}><q>Herbal stoners has the best flower</q> <RatingComponent /></h3>
                    <p className={classes.user}>Knason07</p>
                    <p className={classes.date}> - 3 months ago</p>
                    <p className={classes['testimonials-text']}>
                    Herbal stoners has the best flower I have come across since living in Michigan. If you have your med card Herbal Stoners is definitely a place you should check out.
                    </p>
                  </div>
              </Carousel.Item>

              <Carousel.Item className={classes['testimonial-content']}>
                  <div className={'carousal-item'}>
                    <h3 className={classes['testimonials-heading']}><q>Gold Standard of Dispensaries...</q> <RatingComponent /></h3>
                    <p className={classes.user}>Little_L</p>
                    <p className={classes.date}> - 1 months ago</p>
                    <p className={classes['testimonials-text']}>
                    For me, this is the gold standard of dispensaries.  Top notch staff, excellent product (even the shake is above average), reasonable prices & great selection.  Can't say enough good things about this place.
                    </p>
                  </div>
              </Carousel.Item>
          </Carousel>
       </div>

     </section>
  );
};

export default Testimonials;
