import React from 'react'
import './con1.css'
import Video1 from "../../../assets/homepage.mp4"
import Image1 from '../../../assets/2023 bbq comp/pic2.jpg'
import image2 from '../../../assets/2023 bbq comp/pic3.jpg'
import image3 from '../../../assets/2023 bbq comp/pic4.jpg'
import image4 from '../../../assets/2023 bbq comp/pic8.jpg'
import image5 from '../../../assets/2023 bbq comp/pic5.jpg'
import image6 from '../../../assets/2023 bbq comp/pic6.jpg'
import image7 from '../../../assets/2023 bbq comp/pic7.jpg'
import image8 from '../../../assets/2023 bbq comp/fusion-festival-2023-kenya.jpg'


const Con1 = () => {
  return (
    <section>
    <div class="container">
        <div class="video-area">
            <video src={Video1} alt='homeVideo' autoPlay loop muted className='homeVideo'>
            </video>
        </div>
        <div className='content'>

            <div class="con-Area">
                <h1 className='headOne'> <a href='#membership'>Membership</a></h1>
                <p className='paraOne'>Welcome to a space 
                where ideas converge and connections flourish –
                 the KenBC Community Forum. As a member, you'll dive into insightful discussions, connect with like-minded individuals, and access exclusive content. Whether you're an expert or a learner, this is your gateway to a vibrant community eager to share and learn together.</p>
                <h1 className='headOne'><a href='#Governance'>Governance</a></h1>
                <p className='paraOne'>It Comprising dedicated individuals chosen by the community, this leadership ushers in a fresh perspective and a wealth of experience. Guided by transparency, inclusivity, and a commitment to progress, the 2023 governance is poised to steer KenBC towards even greater heights. With a collective vision and a passion for positive change, this dynamic team is set to inspire,
                 innovate, and shape the future of our community.</p>
                <h1 className='headOne'><a href='#Benevolence'>Benevolence</a></h1>
                <p className='paraOne'>In times of loss, the Kenyan community has consistently demonstrated its remarkable spirit of assistance and solidarity for those who have experienced the passing of a loved one. Recognizing the challenges that a vast community can face, especially within a demanding economic landscape, a significant step has been taken to alleviate the complexities of this process. In a unanimous decision born out of the collective vision, a Benevolent Fund has been established. This initiative aims to streamline the process of raising crucial financial 
                    support for registered members grappling with bereavement.</p>
            </div>

        </div>

    </div>

    <div className='picSec'>

      <h1 className='headerTwo'> KENBC GALLERY </h1>
      
      <div class="image-container">

        <img src={Image1} alt="i 1" className='gallery1' />
        <img src={image2} alt="i 2" className='gallery1'/>
        <img src={image3} alt="i 3" className='gallery1'/>
        <img src={image4} alt="i 4" className='gallery1' />
        <img src={image5} alt="i 5" className='gallery1'/>
        <img src={image6} alt="i 6" className='gallery1'/>
        <img src={image7} alt="i 7" className='gallery1'/>
        <img src={image8} alt="i 8" className='gallery1'/>

      </div>

    </div>

    </section>
  )
}

export default Con1
