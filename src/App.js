import './App.css';
import Navbar from './Components/Navbar/navbar'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about'
import Governance from './Components/Governance/governance'
import Membership from './Components/Membership/membership'
import Benevolence from './Components/Benevolence/benevolence.jsx'
import News from './Components/News/news'

import Footer from './Components/Footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Navbar/>
      
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Governance" element={<Governance />}/>
          <Route path="/Membership" element={<Membership />}/>
          <Route path="/Benevolence" element={<Benevolence />}/>
          <Route path="/News" element={<News />}/>

        </Routes>
      <Home/>
      
      <Footer/> 
      
    </Router>
  );
}

export default App;
