import "./App.css";

import React from "react";
import Header from "./components/Header/Header";

import HeroSection from "./components/HeroSection/HeroSection";
import TopAttractions from "./components/TopAttractions/TopAttractions";
import Benefits from "./components/Benefits/Benefits";
import CoolPassIncludes from "./components/CoolPassIncludes/CoolPassIncludes";
import HowToUse from "./components/HowToUse/HowToUse";
import LatestNews from "./components/LatestNews/LatestNews";
import BuyCard from "./components/BuyCard/BuyCard";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
     

    <Header />
    <HeroSection/>
    <TopAttractions/> 
     {/* <Benefits/>
    <CoolPassIncludes/>
    <HowToUse/>
    <LatestNews/>
    <BuyCard/>
    <Reviews/>
    <Footer/> */}


    </div>
  );
}

export default App;
