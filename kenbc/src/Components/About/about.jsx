import React from 'react'
import './about.css'
import image1 from '../../assets/2023 bbq comp/IMAGE 2 - Copy.jpg'
import image2 from '../../assets/2023 bbq comp/image10.jpg'
import image3 from '../../assets/2023 bbq comp/fusion-festival-2023-kenya.jpg'

const about = () => {
  return (
    <section className='about-sec'> 

      <div className='sec-1'>

        <h1>
            About KENBC
        </h1>

        <p>
        The <i>Kenyan Community In British Columbia Society (KENBC) </i>stands as a non-profit entity
          with a mission to unite the diverse Kenyan immigrants who have found their home in British Columbia.
          Our dedication to this cause materializes through the establishment of a dynamic and organized platform that 
          fosters social connections and facilitates a seamless transition into Canadian life. While KENBC remains steadfast 
          in serving the Kenyan-Canadian Community, our commitment extends further to encompass various African-descent communities, 
          individuals residing in British Columbia, and other visible minority groups. Through these endeavors, we actively
            champion inter-culturalism and mutual support, amplifying
            the rich tapestry of cultures that thrive within this vibrant community.
        </p>

      </div> 

      <div className='sec-2'>

          <div className='what-sec'>

            <div className='para-1'>

              <h1>What We Do?</h1>

              <p> At the heart of the Kenyan Community In British Columbia Society (KENBC) lies a profound commitment to fostering unity and integration. We diligently work to bring together the diverse tapestry of Kenyan immigrants who now call British Columbia their home. Through our vibrant platform, we provide a structured and engaging forum for social interaction, ensuring that individuals find a warm welcome and a sense of belonging in their new Canadian life. Beyond serving the Kenyan-Canadian Community, we extend our arms to support fellow African-descent communities, individuals throughout British Columbia, and other visible minority groups. By promoting inter-culturalism and mutual support, we contribute to a harmonious mosaic of cultures that defines the essence of our community.</p>
            
            </div>

            <img src={image1} alt='board and members' className='image1'></img>
          
          </div>

          <div className='essence-sec'>

            <img src= {image2} alt='members1'className='image2'></img>

            <div className='para-2' >

              <h2>The essence of KENBC</h2>

              <p>The Kenyan Community In British Columbia Society (KENBC) stands as a beacon of unity, diversity, and community spirit. As a non-profit organization, we are dedicated to creating a vibrant and inclusive space for Kenyan immigrants who have chosen British Columbia as their home. Our essence is rooted in forging connections, nurturing cultural exchange, and supporting one another as we navigate the path of integration into Canadian life. Beyond our focus on the Kenyan-Canadian Community, we extend our arms to uplift other African-descent communities, individuals across British Columbia, and visible minority groups. At KENBC, our identity is defined by our commitment to inter-culturalism, mutual support, and the shared journey of embracing new beginnings in a land of opportunity.</p>
            
            </div>

          </div>

          <div className='join-sec'>

            <div className='para-3'>
              
              <h2> Join the community</h2>
              
              <p>Step into a community that echoes with the warmth of togetherness. At KENBC, we invite you to be a part of something special. Asante kwa kujiunga na familia yetu ya KENBC, where connections flourish and dreams find a home. Your presence enriches us, and together, we celebrate diversity, support one another, and create lasting memories. Karibu sana! Join us today and let's embark on this remarkable journey together.</p>
              
              <button className='registerBtn'> 

                <a href="#membership" className='join'> Join us</a>

            
              </button>
            
            </div>

            <img src={image3} alt='fusion festival' className='image3'></img>
          </div>
      </div>

    </section>

  )
}

export default about
