import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Listing from "./Components/Listing";
import Login from "./Components/login";
import Register from "./Components/register";
import CartPage from "./Components/cart_page";
import PrivateRoute from "./Components/privateroute";
import Profile from "./Components/profile";
import Contact from "./Components/contact";


function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
    </Router>
    
  );
}

export default App;
