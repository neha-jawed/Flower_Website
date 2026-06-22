import React from "react"
import Home from "./Components/Home"
import Flowers from "./Components/Flowers"
import Contact from "./Components/Contact"
import Cards from "./Components/Cards"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import {Routes ,Route } from 'react-router-dom'
import Footer from "./Components/Footer"
import Lenis from 'lenis'
function App() {

  // Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

  return(
<div className="min-h-screen">
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />}    />
    <Route path="/flowers" element={<Flowers />}    />
    <Route path="/about-us" element={<About />}    />
    <Route path="/contact-us" element={<Contact />}    />
   
  </Routes>
  <Footer />

</div>



)
}
export default App