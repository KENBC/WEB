import React,{ useState } from 'react'
import { link } from 'react-router'
import "./navbar.css"
import logoImg from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import About from '../../../../../KENBCW/kenweb/src/Components/About/about';

const Navbar = () => {
//togglebar
  const[active, setActive] = useState('navBar')
  const showNav =()=> {
    setActive('navBar activeNavbar');
  }

  //remove bar
  const removeNav =()=> {
    setActive('navBar')
    }

  return (
    <section className='navBar-section'>
      <div className='join1'>
        <a href="#membership">Want to join the KENBC community.Read more</a>
      </div>
      <div className='header'>

        <div className='logoDiv'>
          <a href='/kenweb/public/index.html' className='logo1'>
            <img src={logoImg} alt="Logo"className='logo'/>
          </a>
        </div>

        <div className={active}>
          <ul>

            <li className='navItem'>
              <a href={<About/>} className='navlink'>About us</a>
            </li>

            <li className='navItem'>
              <a href="#membership" className='navlink'>Membership</a>
            </li>

            <li className='navItem'>
              <a href="#Governance" className='navlink'>Governance</a>
            </li>

            <li className='navItem'>
              <a href="#benevolence" className='navlink'>Benevolence</a>
            </li>

            <li className='navItem'>
              <a href="#News" className='navlink'>News</a>
            </li>

            <div onClick={removeNav}className='closeNavbar'>
              <IoMdCloseCircle className='icon'/>
            </div>

          </ul>
        </div>

        <div onClick ={showNav} className='toggleNavbar'>
          <IoMenu className='icon' />
        </div>

      </div>

    </section>
  )
}

export default Navbar
