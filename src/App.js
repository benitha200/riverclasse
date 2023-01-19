import './App.css';
import Header from './components/Header/Header';
import Slider from './components/DriverSupport/Slider';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import BarResto from './components/BarResto/BarResto';
import DriverSupport from './components/DriverSupport/DriverSupport';
import Footer from './components/Footer/Footer';
import {useRef} from 'react';

// style

import './assets/css/bootstrap.min.css'
import Supply from './components/Supply/Supply';
import Contact from './components/Contact/Contact';
import Tour from './components/Tour/Tour';


function App() {

  const ref = useRef(null);
  const handleClick = () =>{
    ref.current?.scrollIntoView({behavior:'smooth'});
  };

  return (
    <div className="App">
    

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element= {<DriverSupport/>}/>
      <Route path="BarResto" element= {<BarResto/>}/>
      <Route path="Tour" element= {<Tour/>}/>
      <Route path="Supply" element= {<Supply/>}/>  
      <Route path="Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
