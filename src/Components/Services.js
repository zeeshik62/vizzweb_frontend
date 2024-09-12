import React from 'react'
import logo1 from '../Images/services-functional.svg'
import logo2 from '../Images/services-security.svg'
import logo3 from '../Images/services-performance.svg'
import logo4 from '../Images/services-usability.svg'
import logo5 from '../Images/services-compatibility.svg'
import logo6 from '../Images/services-automation.svg'
function Services() {
    return (
        <div>
            <section>     
                <div className="container pt-5">
                <div className='pt-5'></div> 
                    <div className="row text-center services-p">
                        <div>
                            <h2 style={{ color: '#42a4f5', fontWeight:'400' }}>Our Services</h2>
                            <p style={{fontSize:'40px'}}>Comprehensive Quality Assurance Solutions for Flawless Software</p>
                        </div>
                    </div>
                    <div className='row pt-4'>
                        <div className="col-12 col-sm-6 col-md-4 pb-3">
                            <div className="card services-border">
                                <div className="card-body" style={{backgroundColor: '#21A2DF1A'}}>
                                <img className='pb-3' src={logo1} alt="Logo" />
                                <h5 className="card-title fw-card">Functional Testing</h5>
                                    <p className="card-text">Ensure your software meets functional requirements and delivers seamless user experiences through rigorous testing and validation.Ensure your software meets functional requirements and delivers seamless user experiences through rigorous testing and validation.Ensure your software meets functional requirements and delivers seamless user experiences through rigorous testing and validation.</p>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 pb-3">
                            <div className="card services-border">
                                <div className="card-body" style={{backgroundColor: '#21A2DF1A'}}>
                                <img className='pb-3' src={logo2} alt="Logo" />
                                <h5 className="card-title fw-card">Security Testing</h5>
                                    <p className="card-text">Safeguard your software and user data from potential vulnerabilities, identifying and eliminating security risks.</p>
                                 
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-sm-6 col-md-4 pb-3">
                            <div className="card services-border">
                                <div className="card-body"  style={{backgroundColor: '#21A2DF1A'}}>
                                <img className='pb-3' src={logo3} alt="Logo" />
                                <h5 className="card-title fw-card">Performance Testing</h5>
                                    <p className="card-text">Unleash the full potential of your software with performance testing, optimizing speed, scalability, and responsiveness.</p>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 pb-3">
                            <div className="card services-border">
                                <div className="card-body"  style={{backgroundColor: '#21A2DF1A'}}>
                                <img className='pb-3' src={logo3} alt="Logo" />
                                <h5 className="card-title fw-card">Usability Testing</h5>
                                    <p className="card-text">Enhance user satisfaction and engagement by testing software intuitiveness, accessibility, and overall user experience.</p>
                                 
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card services-border">
                                <div className="card-body" style={{backgroundColor: '#21A2DF1A'}}>
                                <img className='pb-3' src={logo5} alt="Logo" />
                                <h5 className="card-title fw-card">Compatibility Testing</h5>
                                    <p className="card-text">Ensure your software performs flawlessly across various platforms, devices, and browsers, catering to a diverse user base.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="card services-border" >
                                <div className="card-body" style={{backgroundColor: '#21A2DF1A'}} >
                                <img className='pb-3' src={logo6} alt="Logo" />
                                
                                <h5 className="card-title fw-card">Automation Testing</h5>
                                    <p className="card-text">Accelerate testing cycles and increase efficiency with automated testing frameworks, reducing time and effort</p>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Services
