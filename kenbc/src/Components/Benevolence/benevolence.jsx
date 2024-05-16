import React from 'react'
import './benevolence.css'
import image1 from '../../assets/beno/benevolence-3751300 (1).jpg'
import image2 from '../../assets/beno/beno-2.png'
import image3 from '../../assets/profile/george.jpg'
import image4 from '../../assets/profile/Wamae_edited.jpg'
import image5 from '../../assets/profile/Sitawa_edited.png'
import image6 from '../../assets/profile/Kimani-Karangu_edited.jpg'

const benevolence = () => {
  return (
    <div className='beno-sec'>

      <div className='sec-1'>

        <h1>
        Benevolence
        </h1>

        <p>
        Unity in Giving: Our Collective Benevolence Efforts
        </p>

      </div>
      <div className='sec-2'>

        <div className='beno-sec'>

          <div className='para-1'>

            <h1>Supporting Each Other</h1>

            <p>Have you or someone you know recently faced the loss of a loved one? At times like these, our Kenyan community is known for its strong support network. Yet, with the challenges of today's economy, these situations can become complex and overwhelming. That's why we've taken a step forward. We're thrilled to announce the unanimous establishment of a Benevolent Fund, aiming to simplify the process of raising financial support for registered members facing bereavement.

              Our goal is clear: reduce the burden on individual contributions and speed up the urgent support process. We want to stand by you when you need it most. This idea gained ground after an extraordinary meeting for registered members of the KENBC Society held on Dec 05, 2020. But remember, only registered KENBC Association members can participate. The more members join, the lighter the load for everyone.

              Our aim? 200 members. We're excited about the interest this initiative has garnered so far. Don't wait too long – secure your spot and register today. Let's come together to support one another and make a real difference!</p>
                        
          </div>

          <img src={image1} alt='beno-1' className='image1'></img>
        
        </div>
        <div class="row1">
          <div class="col1">
              <img src={image2} class="beno-2" alt="beno-2"></img>
          </div>
          <div class="col2">
              <div class="card-body">
                  <h5 class="card-title">Apply here</h5>
                  <p class="card-text">Prospective members should be official KENBC society members.
                   Applicants must be well-acquainted with
                    and agree to follow the Benevolent
                     Fund's bylaws. To receive a PDF copy 
                     of the aforementioned bylaws, kindly
                      email us at 
                      <a href="mailto:kenbc.benevolent@gmail.com"> kenbc.benevolent@gmail.com</a> 
                      <br></br>Apply below and we shall send the form to you</p>
              </div>
          </div>
        </div>
      </div> 
      <div className='sec-3'>
        <p className='para-3'>Your Benevolent Fund Committee </p>
        <div className='profile-1'>
          <div class="row5">
            <div class="col5">
                <img src={image3} class="img-fluid rounded-start" alt="..."></img>
            </div>
            <div class="col-7">
                <div class="card-b">
                    <h5 class="card-t1">George Chaya</h5>
                    <p class="card-t2">Chairperson</p>
                </div>
            </div>
          </div>
          <div class="row5">
            <div class="col5">
                <img src={image4} class="img-fluid rounded-start" alt="..."></img>
            </div>
            <div class="col-7">
                <div class="card-b">
                    <h5 class="card-t1">George Cauri</h5>
                    <p class="card-t2">Secretary</p>
                </div>
            </div>
          </div>
          <div class="row5">
            <div class="col5">
                <img src={image5} class="img-fluid rounded-start" alt="..."></img>
            </div>
            <div class="col-7">
                <div class="card-b">
                    <h5 class="card-t1">Sitawa Joyce Ywaya</h5>
                    <p class="card-t2">Treasurer</p>
                </div>
            </div>
          </div>
          <div class="row5">
            <div class="col5">
                <img src={image6} class="img-fluid rounded-start" alt="..."></img>
            </div>
            <div class="col-7">
                <div class="card-b">
                    <h5 class="card-t1">Kimani Wa Karangu</h5>
                    <p class="card-t2">Board Representative</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default benevolence
