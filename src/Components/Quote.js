import React from 'react'
import no1 from '../Images/quote-1.svg'
import no2 from '../Images/quote-2.svg'
import no3 from '../Images/quote-3.svg'
import no4 from '../Images/quote-4.svg'

function Quote() {
    return (

        <div>
            <section>
                <div className='quote-img container'>

                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className='text-light'>Our Cutting-Edge Solutions for Robust Quality Assurance</h1>
                            <br />
                            <p style={{ color: 'white' }}>Trust us to elevate your software quality and deliver a flawless end product. </p>
                            <br />
                            <a href="#contact">
                                <button className="btn btn-light rounded-pill main-btn "><u>Get a Free Quote Today</u></button>
                            </a>
                        </div>

                        <div className="col-12 col-md-6 margin-sm">
                            <div className="row align-items-center">

                                <div className="col-12 col-lg-6 d-flex align-items-center number-margin">
                                    <img className='number-img' src={no1} alt='number1' />
                                    <h5 className='p-2 text-light'>Advance Testing Tools</h5>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center number-margin">
                                    <img className='number-img' src={no2} alt='number2' />
                                    <h5 className='p-2 text-light'>Agile and Devops Integration</h5>
                                </div>

                            </div>
                            <div className="row align-items-center mt-5 number-margin">
                                <div className="col-12 col-lg-6 d-flex align-items-center">
                                    <img className='number-img' src={no3} alt='number3' />
                                    <h5 className='p-2 text-light'>Cloud Testing and Solutions</h5>
                                </div>

                                <div className="col-12 col-lg-6 d-flex align-items-center number-margin">
                                    <img className='number-img' src={no4} alt='number4' />
                                    <h5 className='p-2 text-light'>AI and Machine Learning</h5>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Quote
