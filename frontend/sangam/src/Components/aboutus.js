import React from 'react'
import Footcomponent from '../Components/footer'
import { Link } from 'react-router-dom'
import arpit from '../assets/arpit.jpg'
import rushi from '../assets/rushi.jpg'
import payal from '../assets/payal.jpg'
import blank from '../assets/blank.jpg'
import Navbar from './navHome'
const Aboutus = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div style={{ backgroundColor: 'gainsboro' }}>
        <h1 style={{ textAlign: 'center' }}> About us</h1>
        <div
          className='container'
          style={{ paddingTop: 50, paddingBottom: 50 }}>
            
          <p>Welcome to our Tiffin Delivery Management System!</p>
          Delicious everyday food using choicest raw materials, delivered to your doorstep
          Home-style meals, prepared in state-of the art automated kitchen. The kitchen maintains the highest levels of hygiene and sanitization while handling food.
          Serving North-Indian, South-Indian and desi-Chinese cuisines, choose from Vegetarian and Non-Vegetarian meal options.
          Our cooks have more than a decade of experience in catering industry.
          <p>Join us in this journey to make every meal a delightful experience!</p>
          Sign up now and save big          <br />
          <br />
          <br />
          <br />
          <h1 style={{ textAlign: 'center' }}>Team</h1>
          <div class='row text-center'>
            <div class='col-xl-3 col-md-6 mb-5'>
              <div class='bg-white rounded shadow-sm py-5 px-4'>
                <img
                  src={arpit}
                  alt=''
                  width='100'
                  class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                />
                <h5 class='mb-0'>Arpit Rai</h5>
                <span class='small text-uppercase text-muted'>
            
                </span>
                <a href='https://www.linkedin.com/in/arpit-rai-8a0850272/' class="btn btn-primary rounded-circle custom-icon"><div class='bi bi-linkedin ' style={{padding:1}}></div></a>
                
              </div>
            </div>

            <div class='col-xl-3 col-md-6 mb-5'>
              <div class='bg-white rounded shadow-sm py-5 px-4'>
                <img
                  src={rushi}
                  alt=''
                  width='100'
                  class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                />
                <h5 class='mb-0'>Rushikesh Rajgurav</h5>
                <span class='small text-uppercase text-muted'>
            
                </span>
                <a href='https://www.linkedin.com/in/rushikesh-rajgurav-611198216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' class="btn btn-primary rounded-circle custom-icon"><div class='bi bi-linkedin ' style={{padding:1}}></div></a>
                
              </div>
            </div>

            <div class='col-xl-3 col-md-6 mb-5'>
              <div class='bg-white rounded shadow-sm py-5 px-4'>
                <img
                  src={blank}
                  alt=''
                  width='100'
                  class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                />
                <h5 class='mb-0'>Viraj Khalate</h5>
                <span class='small text-uppercase text-muted'>
                <a href='http://www.linkedin.com/in/viraj-khalate' class="btn btn-primary rounded-circle custom-icon"><div class='bi bi-linkedin' style={{padding:1}}></div></a>

                </span>
              </div>
            </div>

            <div class='col-xl-3 col-sm-6 mb-5'>
              <div class='bg-white rounded shadow-sm py-5 px-4'>
                <img
                  src={blank}
                  alt=''
                  width='100'
                  class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                />
                <h5 class='mb-0'>Ashwini Chougale</h5>
                <span class='small text-uppercase text-muted'>
                </span>
                <a href='https://www.linkedin.com/in/ashwini-chougale-6a4262284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'class="btn btn-primary rounded-circle custom-icon"><div class='bi bi-linkedin' style={{padding:1}}></div></a>
              </div>
            </div>

            <div class='col-xl-3 col-sm-6 mb-5'>
              <div class='bg-white rounded shadow-sm py-5 px-4'>
                <img
                  src={payal}
                  alt=''
                  width='100'
                  class='img-fluid rounded-circle mb-3 img-thumbnail shadow-sm'
                />
                <h5 class='mb-0'>Payal Kanase</h5>
                <span class='small text-uppercase text-muted'>
                </span>
                <a href='https://www.linkedin.com/in/payal-kanase-5392b3202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' class="btn btn-primary rounded-circle custom-icon"><div class='bi bi-linkedin' style={{padding:1}}></div></a>

              </div>
            </div>
          </div>
        </div>
        <Footcomponent />
      </div>
    </div>
  )
}




export default Aboutus
