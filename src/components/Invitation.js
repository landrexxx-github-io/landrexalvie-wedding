import React from 'react'
import gallery1 from '../assets/images/invitation/1.png'
import gallery2 from '../assets/images/invitation/2.png'
import gallery3 from '../assets/images/invitation/3.png'
import gallery4 from '../assets/images/invitation/4.png'
import gallery5 from '../assets/images/invitation/5.png'
import gallery6 from '../assets/images/invitation/6.png'

function Invitation () {
  return (
    <div id='invitation' className='section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Invitation</span>
            <h2 className='oliven-title'>Wedding Invitation</h2>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row gallery-filter mt-3'>
          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery1}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Part 1</h4>
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery2}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Part 2</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery3}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Part 3</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery4}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Part 4</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item ceremony'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery5}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Part 5</h4>{' '}
                </div>
              </div>
            </a>
          </div>
          <div className='col-md-4 gallery-item party'>
            <a href='/' className='img-zoom'>
              <div className='gallery-box'>
                <div className='gallery-img'>
                  {' '}
                  <img
                    src={gallery6}
                    className='img-fluid mx-auto d-block'
                    alt=''
                  />{' '}
                </div>
                <div className='gallery-detail'>
                  <h4 className='mb-0'>Part 6</h4>{' '}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invitation
