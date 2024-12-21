import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Adjust the path as necessary
import HomePage from './pages/HomePage'; // Replace with your actual home page component
import Navbar from './components/Navbar';
import SubscribePage from './pages/SubscribePage';
import Footer from './components/Footer';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/subscribe' element={<SubscribePage/>} />
          <Route path='/footer' element={<Footer/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
        {/* <Navbar/> */}
        {/* <HomePage/> */}
      </div>
    </Router>
  );
};

export default App;
