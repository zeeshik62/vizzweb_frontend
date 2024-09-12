import React from 'react'
import tick from '../Images/why-tick.svg'
import whyright from '../Images/why-right.svg'
function Why() {
    return (
        <div>
            <div className='container mt-5 pb-5'>
                <section>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2>Why Choose<span style={{ color: '#42a4f5' }}> Vizz Web Solutions </span>
                                Our Commitment to <span style={{ color: '#42a4f5' }}> Software </span> Quality Assurance</h2>
                                
                            <div className="d-flex flex-column pt-4">
                                <div className="d-flex align-items-center">
                                    <img className='img-fluid tick-images me-2' src={tick} alt='tick'/>
                                    <h4 className='mt-2'>Experties</h4>
                                </div>
                                <p className='ms-5 ps-1'>With a team of experienced professionals, we bring deep domain knowledge across various industries, ensuring tailored and effective QA solutions.</p>

                                <div className="d-flex align-items-center">
                                    <img className='img-fluid tick-images me-2' src={tick} alt='tick'/>
                                    <h4 className='mt-2'>Client-Centric Approach</h4>
                                </div>
                                <p className='ms-5 ps-1'>We prioritize understanding your unique requirements, aligning our services to your goals, and delivering exceptional results that exceed expectations.</p>

                                <div className="d-flex align-items-center">
                                    <img className='img-fluid tick-images p-1' src={tick} alt='tick'/>
                                    <h4 className='mt-2'>Experience the Difference</h4>
                                </div>
                                <p className='ms-5 ps-1'>Elevate your user experience, boost performance, and gain a competitive edge. Trust our expertise to deliver software excellence that surpasses expectations.</p>

                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex align-items-center" >
                            <img className='img-fluid rotating-image' src={whyright} alt='image' />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Why
