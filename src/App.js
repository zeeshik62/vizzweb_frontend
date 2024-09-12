import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main'
import Services from './Components/Services';
import Contact from './Components/Contact';
import Qa from './Components/Qa';
import Quote from './Components/Quote';
import Why from './Components/Why';
import Schedule from './Components/Schedule';
import Product from './Components/Product';
import Footer from './Components/Footer';

function App() {
  return (
    
      <div>
        <Main />
        <Services />
        <Contact />
        <Qa />
        <Quote />
        <Why/>
        <Schedule/>
        <Product/>
        <Footer/>
        
      </div>
    
  );
}

export default App;
