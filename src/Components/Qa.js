import qa1 from '../Images/qa-1.svg'
import qa2 from '../Images/qa-2.svg'
import qa3 from '../Images/qa-3.svg'
import qa4 from '../Images/qa-4.svg'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules


function Qa() {
    return (
        <div>
            <section>
                

                
                    <div className="row text-center">
                        <div className='qa-h'>
                            <h4 style={{ color: '#42a4f5' }}>Our Quality Assurance Process</h4>
                            <p style={{fontSize:'20px'}}>Early on in the project, our testers are brought on board. This enables us to fulfill the highest quality standards and ensure that nothing in your product is neglected.</p>
                        </div>
                    </div>
                    <div className='row pt-4'>  
                        <div className='p-5'>
                    <Swiper 
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
            spaceBetween: 20,
          },
        }}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
        className="mySwiper"
      >
                            <SwiperSlide>
                                <div className="card services-border text-center qa-card" style={{ backgroundColor: '#D8D8D81A' }}>
                                    <div className="card-body qa-media">
                                        <img className='pb-3 img-fluid' src={qa1} alt="Logo" />
                                        <h5 className="card-title fw-card">Requirement Analysis</h5>
                                        <p className="card-text">Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card services-border text-center qa-card" style={{ backgroundColor: '#D8D8D81A' }}>
                                    <div className="card-body">
                                        <img className='pb-3 img-fluid' src={qa2} alt="Logo" />
                                        <h5 className="card-title fw-card">Test Execution</h5>
                                        <p className="card-text">Unleash the full potential of your software with performance testing, optimizing speed, scalability, and responsiveness.</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card services-border text-center qa-card" style={{ backgroundColor: '#D8D8D81A' }}>
                                    <div className="card-body">
                                        <img className='pb-3 img-fluid' src={qa3} alt="Logo" />
                                        <h5 className="card-title fw-card">Test Planning and design</h5>
                                        <p className="card-text">Unleash the full potential of your software with performance testing, optimizing speed, scalability, and responsiveness.</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card services-border text-center qa-card" style={{ backgroundColor: '#D8D8D81A' }}>
                                    <div className="card-body">
                                        <img className='pb-3 img-fluid' src={qa4} alt="Logo" />
                                        <h5 className="card-title fw-card">Defect Tracking and Reporting</h5>
                                        <p className="card-text">Unleash the full potential of your software with performance testing, optimizing speed, scalability, and responsiveness.</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card services-border text-center qa-card" style={{ backgroundColor: '#D8D8D81A' }}>
                                    <div className="card-body">
                                        <img className='pb-3 img-fluid' src={qa4} alt="Logo" />
                                        <h5 className="card-title fw-card">Performance Testing</h5>
                                        <p className="card-text">Unleash the full potential of your software with performance testing, optimizing speed, scalability, and responsiveness.</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="card services-border text-center qa-card" style={{ backgroundColor: '#D8D8D81A' }}>
                                    <div className="card-body">
                                        <img className='pb-3 img-fluid' src={qa4} alt="Logo" />
                                        <h5 className="card-title fw-card">Performance Testing</h5>
                                        <p className="card-text">Unleash the full potential of your software with performance testing, optimizing speed, scalability, and responsiveness.</p>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                        </div>

                    </div>
                
                
            </section>
        </div>
    )
}

export default Qa
