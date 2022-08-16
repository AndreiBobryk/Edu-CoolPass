import "./App.css";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { getTranslate } from "./redux/actions/translate";
import { getContentMainSection } from "./redux/actions/getContentMainSection";
import { getContentTopAttractionsSection } from "./redux/actions/getContentTopAttractionsSection";
import { getContentBenefitSection } from "./redux/actions/getContentBenefitSection";
import {
  getCoolPassIncludesContent,
  getCoolPassIncludesImages,
} from "./redux/actions/getCoolPassIncludesSection";
import {
  getContentHowToUse,
  getImagesHowToUse,
} from "./redux/actions/getContentHowToUseSection";
import { getContentLatestNews } from "./redux/actions/getContentLatestNewsSection";
import { getHeaderMenu } from "./redux/actions/getContentHeaderSection";
import { getPriceBuyCard } from "./redux/actions/getPriceBuyCard";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { Attractions } from "./pages/Attractions";

function App() {
  useEffect(() => {
    document.title = "CoolPass | Prague CoolPass";
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTranslate());
    dispatch(getContentMainSection());
    dispatch(getContentTopAttractionsSection());
    dispatch(getContentBenefitSection());
    dispatch(getCoolPassIncludesImages());
    dispatch(getCoolPassIncludesContent());
    dispatch(getImagesHowToUse());
    dispatch(getContentHowToUse());
    dispatch(getContentLatestNews());
    dispatch(getHeaderMenu());
    dispatch(getPriceBuyCard());
  }, []);
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
