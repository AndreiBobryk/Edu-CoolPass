import "./App.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header/Header";

import MainSection from "./components/MainSection/MainSection";
import TopAttractions from "./components/TopAttractions/TopAttractions";
import Benefits from "./components/Benefits/Benefits";
import CoolPassIncludes from "./components/CoolPassIncludes/CoolPassIncludes";
import HowToUse from "./components/HowToUse/HowToUse";
import LatestNews from "./components/LatestNews/LatestNews";
import BuyCard from "./components/BuyCard/BuyCard";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import { getTranslate } from "./redux/actions/translate";
import { getContentMainSection } from "./redux/actions/getContentMainSection";
import { getContentTopAttractionsSection } from "./redux/actions/getContentTopAttractionsSection";
import { getContentBenefitSection } from "./redux/actions/getContentBenefitSection";
import { getCoolPassIncludesContent, getCoolPassIncludesImages } from "./redux/actions/getCoolPassIncludesSection";
import { getContentHowToUse, getImagesHowToUse } from "./redux/actions/getContentHowToUseSection";
import { getContentLatestNews } from "./redux/actions/getContentLatestNewsSection";
import { getHeaderMenu } from "./redux/actions/getContentHeaderSection";
import { getPriceBuyCard } from "./redux/actions/getPriceBuyCard";

function App() {
  useEffect(() => {
    document.title = "CoolPass | Prague CoolPass";
  });
  const language = useSelector(state => state.translation.language)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTranslate())
    dispatch(getContentMainSection())
    dispatch(getContentTopAttractionsSection())
    dispatch(getContentBenefitSection())
    dispatch(getCoolPassIncludesImages())
    dispatch(getCoolPassIncludesContent())
    dispatch(getImagesHowToUse())
    dispatch(getContentHowToUse())
    dispatch(getContentLatestNews())
    dispatch(getHeaderMenu())
    dispatch(getPriceBuyCard())
  }, [])

  console.log('language', language)
  

  return (
    <div className="App">
      <Header  />
      <MainSection/>
      <TopAttractions />
      <Benefits /> 
      <CoolPassIncludes />
      <HowToUse />
      <LatestNews /> 
      <BuyCard />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
