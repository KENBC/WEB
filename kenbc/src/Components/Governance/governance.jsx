import React from 'react'
import './governance.css'

import image1 from '../../assets/profile/Kimani-Karangu_edited.jpg'
import image2 from '../../assets/profile/kush.jpg'
import image3 from '../../assets/profile/Joanne-Gichu.jpg'
import image4 from '../../assets/profile/Sharon_edited.png'
import image5 from '../../assets/profile/Wambui.jpg'
import image6 from '../../assets/profile/muthee.png'
import image7 from '../../assets/profile/simon.jpg'
import image8 from '../../assets/profile/agnes.jpg'
import image9 from '../../assets/profile/Alison.jpg'
import image10 from '../../assets/profile/image10.jpg'


const governance = () => {
  return (
    <section className='team'>

      <div className="sec-1">

        <h2>Our Team</h2>
        <p>Meet our diverse, dedicated board guiding KENBC to a future of unity and empowerment</p>

      </div>

      <div className="sec-2">
        <div class="row1">
          <div class="col1">
              <img src={image1} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Kimani  Wa Karangu</h5>
                  <p class="card-text">President</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image2} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Laban Kuria (Kush)</h5>
                  <p class="card-text">Deputy Prsident</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image3} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Joan Gicho</h5>
                  <p class="card-text">Traesurer</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image4} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Sharon Sang</h5>
                  <p class="card-text">Secreatary</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image5} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Wambui Wamae</h5>
                  <p class="card-text">Outreach and Awareness</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image6} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Muthee Wahome(Aucher)</h5>
                  <p class="card-text">IT, Branding and Marketing</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image7} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Simon Chahasi</h5>
                  <p class="card-text">Events</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image8} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Agnes Mwambodze</h5>
                  <p class="card-text">General Affairs</p>
              </div>
          </div>
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image9} class="img-fluid rounded-start" alt="..."></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Alison Zawadi</h5>
                  <p class="card-text">Youth affairs and Sports</p>
              </div>
          </div>
        </div>
      </div>
      <div className='sec-3'>

          <div className='what-sec'>

            <div className='para-1'>

              <h1>Effective Leadership: Guiding Our Path</h1>

              <p> At KENBC, we pride ourselves on transparent and effective governance. Our dedicated board of directors and experienced executive team collaboratively guide our strategic decisions, ensuring alignment with our mission and values. By fostering open communication and robust decision-making processes, we create a solid foundation for our organization's growth and impact.</p>
  
            </div>

            <img src={image10} alt='board and members' className='image1'></img>
          
          </div>
      </div>

    </section>
  )
}

export default governance
