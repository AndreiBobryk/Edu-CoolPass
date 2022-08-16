import React from "react";
import Benefits from "../components/Benefits/Benefits";
import BuyCard from "../components/BuyCard/BuyCard";
import CoolPassIncludes from "../components/CoolPassIncludes/CoolPassIncludes";
import HowToUse from "../components/HowToUse/HowToUse";
import LatestNews from "../components/LatestNews/LatestNews";
import MainSection from "../components/MainSection/MainSection";
import Reviews from "../components/Reviews/Reviews";
import TopAttractions from "../components/TopAttractions/TopAttractions";

export function IndexPage() {
  return (
    <>
      <MainSection />
      <TopAttractions />
      <Benefits />
      <CoolPassIncludes />
      <HowToUse />
      <LatestNews />
      <BuyCard />
      <Reviews />
    </>
  );
}
