import React from 'react'
import Navbar from './Navbar';

function Main() {
    return (
        <div className="main-page">
            <header>
                <Navbar />
            </header>
            <section>
                <div className='container'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-12 col-md-6'>
                            <h1>Quality Assurance That Sets You Apart </h1>
                            <p className='pt-3 text-light'>Take you software to new level of excellence with our<br />
                                professional quality assurance services. With each click,<br /> our QA specialist will assist you in achieving<br /> excellence.</p>
                                <hr/>
                            <a href="#contact">
                                <button className="btn btn-light rounded-pill main-btn">Contact Us Today</button>
                            </a>
                        </div>
                        <div className='col-12 col-md-6 col-lg-5'>
                            <div className='form-custom-css'>
                                <div>

                                    <div className='main-form--header-css'>
                                        <h4>Get you FREE Estimate</h4>
                                        <h4 style={{ color: '#42a4f5'}}>Now!</h4>
                                    </div>
                                    <form className='px-4 py-5'>
                                        <div className="form-floating">
                                            <select className="form-select shadow-sm" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Saas App</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                {/* <label htmlhtmlFor="floatingSelect">Works with selects</label> */}
                                            </select>

                                        </div>

                                        <div className="form-floating mt-4 shadow-sm">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlhtmlFor="floatingInput">Enter your name</label>
                                        </div>
                                        <div className="form-floating mt-4 shadow-sm">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlhtmlhtmlFor="floatingInput">Enter you email</label>
                                        </div>
                                        <div className="form-floating mt-4 shadow-sm">
                                            <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                                <option selected>Select Country</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {/* <label htmlhtmlFor="floatingSelect">Works with selects</label> */}
                                        </div>
                                        <div className="form-floating mt-4 shadow-sm">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlhtmlhtmlFor="floatingInput">+92 123 456 78 </label>
                                        </div>
                                        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );

}

export default Main
