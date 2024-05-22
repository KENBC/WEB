import React from 'react'
import './membership.css'
import image1 from '../../assets/membership/hands-1917895_1280.png'

const membership = () => {
  return (
    <section className='membership-sec'>
      <div className='sec-1'>

        <h1>
            Membership
        </h1>

        <p>
        Participate in impactful initiatives 
        and projects that contribute to the well-being of not only Kenyan-Canadians
         but also other diverse groups in British Columbia.
        </p>

      </div> 

      <div className='sec-2'>

        <div className='join-sec'>

          <div className='para-1'>

            <h1>Join us</h1>

            <p>Join KENBC and experience a 
              vibrant tapestry of cultures, traditions, and shared stories
               that celebrate your roots while embracing new beginnings. 
            </p>        

          </div>

          <img src={image1} alt='beno-1' className='image1'></img>
        
        </div>
      
      </div>

    </section>
  )
}

export default membership
