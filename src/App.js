import React from "react";
import InfoDiet from "./pages/InfoDiet";
import "./index.css"
import Footer from "./components/Footer"
import RunwayProject from "./pages/projects/Runway";
import Now from "./pages/Now"
import People from "./pages/People"
import Home from "./pages/Home"
import Art from "./pages/Art"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/infodiet" element={<InfoDiet />} />
          <Route path="/now" element={<Now />} />
          <Route path="/people" element={<People />} />
          <Route path="/art" element={<Art />} />
          <Route path='/irunway-demo' element={<RunwayProject />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}