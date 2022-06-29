import React from 'react'
import Bride from '../assets/images/profile-bride.jpg'
import Groom from '../assets/images/profile-groom.jpg'

function Bridegroom() {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Alvie Jean C. Gayda <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Bride</span>
                  <p>
                    <i>
                      Out of nowhere and in a way completely
                      unexpected, unbelievable and unanticipated.
                      She came face to face with a man who seemed..familiar.
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Landrex O. Rebuera <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>The Groom</span>
                  <p>
                    <i>
                      All the doubts and insecurities melted away,
                      As if they had never even existed.
                      His ‘nevers’ transformed into ‘always’
                      His ‘not nows’ changed into ‘forever.’
                    </i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Are getting married!</h3>
            <h4 className='oliven-couple-subtitle'>
              July 09, 2022 — Cantilan, Surigao del Sur
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bridegroom
