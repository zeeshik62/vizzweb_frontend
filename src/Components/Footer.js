import React from 'react'

function Footer() {
  return (
    <div>
        <section>
        <div className="row">
          <div className="col-12 col-sm-3">

          </div>
          <div className="col-12 col-sm-6 text-center">
            <h4>Now to take your Software Quality to next level!</h4>
            <br />
            <a href="#contact">
              <button className="btn btn-primary rounded-pill contact-btn ps-4 pe-4"><u>Contact Us</u></button>
            </a>
          </div>
          <div className="col-12 col-sm-3">

          </div>
        </div>
        <div className="row mt-5">
            <div className="col-12 text-center pt-3 text-light" style={{backgroundColor:'#1890CF'}}>
                    <p>Copyrights © 2020 All Rights Reserved by Vizz Web Solutions pvt.ltd</p>
            </div>
        </div>
        </section>
      
    </div>
  )
}

export default Footer
