import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Alvie <small>&</small> Landrex
                </span>
              </a>
            </h2>
            <p className='copyright'>July 09, 2022 – Cantilan, Surigal del Sur</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
