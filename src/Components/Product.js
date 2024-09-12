import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import project1 from '../Images/footer/Smart-CRM-Solutions_nw.webp'
import project2 from '../Images/footer/digiebot.webp'
import project3 from '../Images/footer/drip.webp'
import project4 from '../Images/footer/helax.webp'
// import project5 from '../Images/footer/lms.webp'
import project6 from '../Images/footer/nsights.webp'
import project7 from '../Images/footer/redapple-apartments-1.webp'
import project8 from '../Images/footer/sernity.webp'
import project9 from '../Images/footer/utherverse_1.webp'

//marquee
import marquee1 from '../Images/footer/marquee/callersiq-vizzwebsolutions.webp'
import marquee2 from '../Images/footer/marquee/digiebot-vizzwebsolutions.webp'
import marquee3 from '../Images/footer/marquee/kulbrands-vizzwebsolutions.webp'
import marquee4 from '../Images/footer/marquee/maine-virtual-vizzwebsolutions.webp'
import marquee5 from '../Images/footer/marquee/medicareonvideo-vizzwebsolutions.webp'
import marquee6 from '../Images/footer/marquee/nezus-ecosystem-vizzwebsolutions.webp'
import marquee7 from '../Images/footer/marquee/nsights-defi-trader-vizzwebsolutions.webp'
import marquee8 from '../Images/footer/marquee/odoo-vizzwebsolutions.webp'
import marquee9 from '../Images/footer/marquee/safufide-vizzwebsolutions.webp'
import marquee10 from '../Images/footer/marquee/sailfish-boats-vizzwebsolutions.webp'
import marquee11 from '../Images/footer/marquee/teamone-logistics-vizzwebsolutions.webp'
import marquee12 from '../Images/footer/marquee/texas-tige-marine-vizzwebsolutions.webp'
import marquee13 from '../Images/footer/marquee/trubadger-vizzwebsolutions.webp'


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function Product() {
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);
  const handleMouseOver = () => {
    if (marqueeRef.current && marqueeRef2.current) {
      marqueeRef.current.stop(); // Check if the marquee is defined, then stop
      marqueeRef2.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current && marqueeRef2.current) {
      marqueeRef.current.start(); // Check if the marquee is defined, then start
      marqueeRef2.current.start();
    }
  };

  return (
    <div className='product-bg'>
      <section>
        <div className='row pt-5'>
          <div className="col-12 col-sm-3"></div>
          <div className="col-12 col-sm-6 text-center">
            <h1>Our Featured Products</h1>
            <p>We Combine technical expertise, innovative thinking, and a customer-centric approach to ensure that every project we undertake
              is a resounding success. Contact us today to discuss your web development needs and let us help you bring your digital vision to life.
            </p>
          </div>
          <div className="col-12 col-sm-6"></div>
        </div>


        <div className="row product-swipper-css p-5">
          <div className="col-12">
            <Swiper
              modules={[FreeMode, Pagination]}
              slidesPerView={1}
              spaceBetween={35}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              loop={true}
              breakpoints={{
                576: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },

                992: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>
                    <img className='img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project1} alt="Logo" />
                  </div>
                  <h4>Requirement Analysis</h4>
                  <p className='product-limit'>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>


              </SwiperSlide>

              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className=' img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project2} alt="Logo" />
                  </div>
                  <h4>Digiebot</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>

                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className=' img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project3} alt="Logo" />
                  </div>
                  <h4>Drip Shop</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className='img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project4} alt="Logo" />
                  </div>
                  <h4>Healx</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className='img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project6} alt="Logo" />
                  </div>
                  <h4>nSights</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className=' img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project7} alt="Logo" />
                  </div>
                  <h4>Red Apple Appartments</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className='img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project8} alt="Logo" />
                  </div>
                  <h4>Serenity</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="product-img-wrapper">
                  <div>

                    <img className='img-fluid pb-3 product-img' style={{ borderRadius: '40px' }} src={project9} alt="Logo" />
                  </div>
                  <h4>Utheverse</h4>
                  <p>Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
        <div className='row'>

          <div className='col-12'>
            <marquee ref={marqueeRef} behavior="alternate" direction="left" scrollamount="6" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <img className='img-fluid custom-size' src={marquee1} alt='' />
              <img className='img-fluid custom-size' src={marquee2} alt='' />
              <img className='img-fluid custom-size' src={marquee3} alt='' />
              <img className='img-fluid custom-size' src={marquee4} alt='' />
              <img className='img-fluid custom-size' src={marquee5} alt='' />
              <img className='img-fluid custom-size' src={marquee6} alt='' />
              <img className='img-fluid custom-size' src={marquee7} alt='' />
              <img className='img-fluid custom-size' src={marquee8} alt='' />
              <img className='img-fluid custom-size' src={marquee9} alt='' />
              <img className='img-fluid custom-size' src={marquee10} alt='' />
              <img className='img-fluid custom-size' src={marquee11} alt='' />
              <img className='img-fluid custom-size' src={marquee12} alt='' />
              <img className='img-fluid custom-size' src={marquee13} alt='' />
            </marquee>
            <marquee ref={marqueeRef2} vspace='2%' behavior="alternate" direction="right" scrollamount="6" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <img className='img-fluid custom-size' src={marquee1} alt='' />
              <img className='img-fluid custom-size' src={marquee2} alt='' />
              <img className='img-fluid custom-size' src={marquee3} alt='' />
              <img className='img-fluid custom-size' src={marquee4} alt='' />
              <img className='img-fluid custom-size' src={marquee5} alt='' />
              <img className='img-fluid custom-size' src={marquee6} alt='' />
              <img className='img-fluid custom-size' src={marquee7} alt='' />
              <img className='img-fluid custom-size' src={marquee8} alt='' />
              <img className='img-fluid custom-size' src={marquee9} alt='' />
              <img className='img-fluid custom-size' src={marquee10} alt='' />
              <img className='img-fluid custom-size' src={marquee11} alt='' />
              <img className='img-fluid custom-size' src={marquee12} alt='' />
              <img className='img-fluid custom-size' src={marquee13} alt='' />

            </marquee>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
