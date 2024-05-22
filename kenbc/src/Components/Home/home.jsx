import React from 'react'
import './home.css'
import Con1 from "./con1/con1"
import { BrowserRouter as Router, Link } from 'react-router-dom';


const Home = () => {
  return (
    <section >
      <div  className='home'>
        <div className='secContainer'>

          <div className='homeText'>

            <div className='title'>

              <h1> Welcome to KENBC <br/>Kenyan Community In<br/>British Columbia </h1>

              <button className='registerBtn'> 

                <Link to="/Membership" className='join'> Join us</Link>

              </button>

            </div>
          </div>
        </div>
      </div>
      
      <Con1 />
      
    </section>
   

  )
}

export default Home
