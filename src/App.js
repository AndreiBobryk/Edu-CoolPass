import "./App.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getTranslate } from "./redux/actions/translate";

function App() {
  useEffect(() => {
    document.title = "CoolPass | Prague CoolPass";
  });
  const language = useSelector(state => state.translation.language)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTranslate())
  }, [])

  console.log('language', language)
  

  return (
    <div className="App">
      <Header  />
      <HeroSection /> 
      <TopAttractions />
      {/* <Benefits /> 
      <CoolPassIncludes />
      <HowToUse />
      <LatestNews />
      <BuyCard />
      <Reviews />
      <Footer /> */}
    </div>
  );
}

export default App;
