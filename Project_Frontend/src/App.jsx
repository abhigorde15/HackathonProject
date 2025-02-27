import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import './App.css';
import Register from './Components/Register';
import About from './Pages/About';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import DonorProfile from './Components/Donor/DonorProfile';
import Login from './Components/Login';
import Food from './Components/Donor/Food';


function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
     
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
       <Route path="/dashboard/donor" element={<DonorProfile/>}/>
       <Route path="/institute/food" element={<Food/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
