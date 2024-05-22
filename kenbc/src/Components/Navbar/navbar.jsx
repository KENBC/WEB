import React,{ useState } from 'react'
import "./navbar.css"
import logoImg from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
//togglebar
  const[active, setActive] = useState('navBar')
  const showNav =()=> {
    setActive('navBar activeNavbar');
  };

  //remove bar
  const removeNav =()=> {
    setActive('navBar')
  };
  

  return (

    <section className='navBar-section'>
      <div className='join1'>
        <Link to="/Membership">Want to join the KENBC community.Read more</Link>
      </div>
      <div className='header'>

        <div className='logoDiv'>
          <Link to="/" className='logo1'>
            <img src={logoImg} alt="Logo"className='logo'/>
          </Link>
        </div>

        <div className={active}>
          <ul>

            <li className='navItem'>
              <Link to="/About" className='navlink'>About us</Link>
            </li>

            <li className='navItem'>
              <Link to="/Membership" className='navlink'>Membership</Link>
            </li>

            <li className='navItem'>
              <Link to="/Governance" className='navlink'>Governance</Link>
            </li>

            <li className='navItem'>
              <Link to="/Benevolence" className='navlink'>Benevolence</Link>
            </li>

            <li className='navItem'>
              <Link to="/News" className='navlink'>News</Link>
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
