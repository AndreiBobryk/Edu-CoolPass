import "./App.css";

import React from "react";
import Header from "./components/Header/Header";

import HeroSection from "./components/HeroSection/HeroSection";
import TopAttractions from "./components/TopAttractions/TopAttractions";
import Benefits from "./components/Benefits/Benefits";
import CoolPassIncludes from "./components/CoolPassIncludes/CoolPassIncludes";

function App() {

  return (
    <div className="App">
     

    {/* <Header />
    <HeroSection/> */}
    {/* <TopAttractions/> */}
    <Benefits/>
    <CoolPassIncludes/>


    </div>
  );
}

export default App;
