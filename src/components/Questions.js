import React from 'react'
// import where1 from '../assets/images/where-1.jpg'
import where1 from '../assets/images/c_church.jpg'
import where2 from '../assets/images/c_country_farm_3.jpg'
import where3 from '../assets/images/where-3.jpg'
function Questions () {
  return (
    <div id='questions' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i></i> July 09, 2022 <br/>
                <i className='ti-location-pin'></i>Cantilan, Surigao del Sur
              </p>
              <p>
                <i className='ti-time'></i> <span>02:00 PM – 03:00 PM</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Reception</h5>
              <p>
                <i></i> July 09, 2022 <br/>
                <i className='ti-location-pin'></i> P-4, Sitio Tapa, Cantilan, 
                Surigao del Sur
              </p>
              <p>
                <i className='ti-time'></i> <span>05:30 PM - 07:00 PM</span>
              </p>
            </div>
          </div>
          {/* <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Accomodations</h5>
              <p>
                <i className='ti-direction-alt'></i> Hotel and distance from
                wedding party restaurant:
              </p>
              <p>
                <i className='ti-direction'></i> The William Vale (7 min)
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Questions
