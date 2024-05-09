import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/home'
 /* 
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
    <Home/>
     {/* <About/>
    <Membership/>
    <Governance/>
    <Benevolance/>
    <News/>*/}
    <Footer/> 
    </>
  );
}

export default App;
