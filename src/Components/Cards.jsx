import React from 'react'
import '../styles/Cards.css'
import promo1 from '../assets/promo-state-of-work.jpg'
import promo2 from '../assets/promo2.jpg'
import promo3 from '../assets/promo-open-ai.jpg'
import promo4 from '../assets/promo-boost-productivity.jpg'

export default function Cards() {
  return (
    <div className='card-main mt-5'>
      <div className='d-flex justify-content-evenly'>
        <h2 className='card-h2'>Take a deeper dive into a new way to work</h2>
      </div>
      <div className='d-flex justify-content-center cards-grp-main'>
        <div className='card-grid'>
          <a className='c-promo' href='#'>
            <div>
              <figure className='fig-main'>
                <img src={promo1} alt="" className='img-fluid' />
              </figure>
              <header className='c-promo-heading'>
                <span className='c-promo-subheading'>Report</span>
                <h3 className='c-promo-h3'>The State of Work 2023</h3>
              </header>
            </div>
            <div className='c-promo-ctas'>
              <span className='c-promo-cta'>
                <span>
                  Read More
                </span>
              </span>
            </div>
          </a>
          <a className='c-promo' href='#'>
            <div>
              <figure className='fig-main'>
                <img src={promo2} alt="" className='img-fluid' />
              </figure>
              <header className='c-promo-heading'>
                <span className='c-promo-subheading'>On demand</span>
                <h3 className='c-promo-h3'>Big things are launching. Relive the highlights of World Tour New York!</h3>
              </header>
            </div>
            <div className='c-promo-ctas'>
              <span className='c-promo-cta'>
                <span>
                  Watch Now
                </span>
              </span>
            </div>
          </a>
          <a className='c-promo' href='#'>
            <div>
              <figure className='fig-main'>
                <img src={promo3} alt="" className='img-fluid' />
              </figure>
              <header className='c-promo-heading'>
                <span className='c-promo-subheading'>Customer Story</span>
                <h3 className='c-promo-h3'>
                The next big thing? AI for everyone.
                </h3>
              </header>
            </div>
            <div className='c-promo-ctas'>
              <span className='c-promo-cta'>
                <span>
                  Read More
                </span>
              </span>
            </div>
          </a>
          <a className='c-promo' href='#'>
            <div>
              <figure className='fig-main'>
                <img src={promo4} alt="" className='img-fluid' />
              </figure>
              <header className='c-promo-heading'>
                <span className='c-promo-subheading'>Webinar</span>
                <h3 className='c-promo-h3'>
                Top Slack tips to boost productivity
                </h3>
              </header>
            </div>
            <div className='c-promo-ctas'>
              <span className='c-promo-cta'>
                <span>
                  Watch Now
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
