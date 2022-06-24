import React from "react";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router>
      <Navbar fixed="top" />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
      <Footer fixed="bottom" />
    </Router>
  );
}

export default App;
