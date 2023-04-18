import React, {Suspense, lazy} from 'react'
import classes from './BannerSection.module.css';


import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
//  Images
import banner1 from '../../Assets/banner/weedmaps.jpg';
import banner1Webp from '../../Assets/banner/weedmaps.webp';
import banner2 from '../../Assets/banner/dutchie.jpg';
import banner2Webp from '../../Assets/banner/dutchie.webp';
import banner3 from '../../Assets/banner/leafly.jpg';
import banner3Webp from '../../Assets/banner/leafly.webp';

function BannerSection() {
  return (
    <section className={classes.banner}>
        <Suspense fallback={<LoadingSpinner />}>
          <div className={classes['banner-image--wrapper']}>
            {/* Banner icons */}
              <picture>
                  <source srcSet={`${banner1}, ${banner1Webp}`} />

                  <img className={classes['banner-image']} src={banner1Webp} loading="lazy" alt="weedmaps" />
              </picture>

              <picture>
              <source srcSet={`${banner2}, ${banner2Webp}`} />

              <img className={classes['banner-image']} src={banner2Webp} loading="lazy" alt="dutchie" />
              </picture>

              <picture>
              <source srcSet={`${banner3}, ${banner3Webp}`} />

              <img className={classes['banner-image']} src={banner3Webp} loading="lazy" alt="leafly" />
              </picture>
          </div>
        </Suspense>
    </section>
  )
}

export default BannerSection;