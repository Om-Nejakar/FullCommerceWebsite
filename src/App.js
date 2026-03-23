import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Listing from "./Components/frontend/Listing";
import Login from "./Components/frontend/login";
import Register from "./Components/frontend/register";
import CartPage from "./Components/frontend/cart_page";
import PrivateRoute from "./Components/frontend/privateroute";
import Profile from "./Components/frontend/profile";
import Contact from "./Components/frontend/contact";


function App() {

  return (
    
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Listing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
    </Router>
    
  );
}
export default App;
