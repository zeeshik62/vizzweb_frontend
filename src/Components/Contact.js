import React from 'react'
function Contact() {
  return (
    <div>
      <div className='contact-bg'>

      <div className='row align-items-center'>
        {/* {<img src={bg} alt={bg}/>} */}
        <div className='col-3'>
        </div>
        <div className='col-12 col-md-6 text-center p-5 '>
          <p style={{fontSize:'34px', fontWeight:'500' }}>Are you prepared to advance your software to a new level? Discover the power of immaculate performance and an outstanding user experience..<br /> <span style={{ color: '#1890CF' }}> Contact us right away.</span></p>
          <a href="#contact">
            <button className="btn btn-primary rounded-pill contact-btn">Contact Us</button>
          </a>
        </div>
        <div className='col-3'>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Contact

