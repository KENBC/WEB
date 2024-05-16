import './App.css';
import Navbar from './Components/Navbar/navbar'

import Benevolence from './Components/Benevolence/benevolence.jsx'
/*
import Home from './Components/Home/home.jsx
import Home from './Components/Home/home.jsx

/*
import Governance from './Components/Governance/governance'
import Home from './Components/Home/home.jsx
import About from './Components/About/about'
import Governance from './Components/Governance/governance'
import Membership from './Components/Membership/membership'
import Benevolance from './Components/Benevolance/benevolance'
import News from './Components/News/news'*/

import Footer from './Components/Footer/footer'

function App() {
  return (
    <>
    <Navbar/>
    
    <Benevolence/>
    
     {/*/<Home/> <About/>
    <Membership/>
    <Governance/>
    <Benevolance/>
    <News/>*/}
    <Footer/> 
    </>
  );
}

export default App;
