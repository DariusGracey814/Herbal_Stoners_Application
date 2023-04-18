import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../UI/Container/Container";

import logo from "../../Assets/stonedEmoji.png";
import footerImg from "../../Assets/footerBg.jpg";
import classes from "./Footer.module.css";

function HerbalFooter() {
  const [logoImage, setLogoImage] = useState(null);
  const [footerImage, setFooterImage] = useState(null);

  useEffect(() => {
    setLogoImage(logo);
    setFooterImage(footerImg);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={classes.footer}
      style={{ backgroundImage: `url(${footerImage})` }}
      aria-label="jars of weed"
    >
      <div className={classes["footer-content"]}>
        <Container>
          <div className={classes["footer-wrapper"]} onClick={scrollTop}>
            {/* COL 1 */}
            <div className={`safari-gap--fix1 ${classes["footer-logo"]}`}>
              <Link to="/home" className={classes["logo-wrapper"]}>
                <p className={classes["logo_text"]}>Herbal Stoners</p>
                <img
                  className={classes.logo}
                  src={logoImage}
                  alt="herbal stoners logo"
                />
              </Link>

              <p className={classes["logo-context"]}>
                Herbal Stoners is a Recreational/Adult-Use Marijuana Retailer.
                We are located at 10 S Huron St in the downtown historic
                district of Ypsilanti.
              </p>
            </div>

            {/* COL 2 */}
            <div className={`safari-gap--fix1 ${classes["info-div"]}`}>
              <p className={classes["footer-heading"]}>Contact Us</p>

              <div className={classes["contact-content"]}>
                <div className={classes["contact-item"]}>
                  <i
                    className={`fa-solid fa-location-dot safari-gap--fix0_5 ${classes["footer-icon"]}`}
                  ></i>
                  <a
                    href="https://www.google.com/maps/place/10+S+Huron+St,+Ypsilanti,+MI+48197/@42.2406596,-83.6154334,17z/data=!3m1!4b1!4m5!3m4!1s0x883ca83f543ce3a5:0x3c39b56146d39dc2!8m2!3d42.2406556!4d-83.6132447"
                    target="_blank"
                  >
                    10 S Huron St, Ypsilanti MI, 48197
                  </a>
                </div>

                <div className={classes["contact-item"]}>
                  <i
                    className={`fa-solid fa-envelope-open safari-gap--fix0_5 ${classes["footer-icon"]}`}
                  ></i>
                  <a href="mailto:herbalstoners@gmail.com">
                    herbalstoners@gmail.com
                  </a>
                </div>

                <div className={classes["contact-item"]}>
                  <i
                    className={`fa-solid fa-phone-flip safari-gap--fix0_5 ${classes["footer-icon"]}`}
                  ></i>
                  <a href="tel:734-486-8321">734-486-8321</a>
                </div>

                {/* Social Icons */}
                <div className={`${classes["contact-item"]} ${classes.icons}`}>
                  {/* Instagram */}
                  <a
                    className="safari-gap--fix0_5"
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <i
                      className={`fa-brands fa-instagram ${classes["footer-icon"]} ${classes["social-icon"]}`}
                      title="Instagram"
                    ></i>
                  </a>

                  {/* Twitter */}
                  <a
                    className="safari-gap--fix0_5"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <i
                      className={`fa-brands fa-twitter ${classes["footer-icon"]}  ${classes["social-icon"]}`}
                      title="Twitter"
                    ></i>
                  </a>

                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank">
                    <i
                      className={`fa-brands fa-facebook ${classes["footer-icon"]}  ${classes["social-icon"]}`}
                      title="Facebook"
                    ></i>
                  </a>
                </div>
              </div>
            </div>

            {/* COL 3 */}
            <div
              className={`safari-gap--fix1 ${classes["info-div"]} ${classes["about-us"]}`}
            >
              <p className={classes["footer-heading"]}>About Us</p>

              <ul className={classes["footer-list"]}>
                <li className={classes["footer-item"]}>
                  <Link to="/about-us">Customer Reviews</Link>
                </li>
              </ul>
            </div>

            {/* COL 4 */}
            <div className={`${classes["info-div"]} ${classes["quick-links"]}`}>
              <p className={classes["footer-heading"]}>Quick Links</p>

              <ul className={classes["footer-list"]}>
                <li className={classes["footer-item"]}>
                  <Link to="/menu">View Menu</Link>
                </li>
                <li className={classes["footer-item"]}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li className={classes["footer-item"]}>
                  <Link to="/subscribe">Subscribe</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes.divider}></div>
          <p className={classes.author}>
            <span className={classes.copyright}>
              &copy; 2023 Herbal Stoners
            </span>{" "}
            | Website By Darius Gracey
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default HerbalFooter;
