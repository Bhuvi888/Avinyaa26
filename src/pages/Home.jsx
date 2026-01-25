import React from 'react';
import Hero from '../components/home_sections/Hero';
import StatsSection from '../components/home_sections/StatsSection';
import MissionVideoWrapper from '../components/home_sections/MissionVideoWrapper';
import FutureBanner from '../components/home_sections/FutureBanner';

const Home = () => {
  return (
    <>
      <Hero />

      <MissionVideoWrapper />
      <FutureBanner />
    </>
  );
};

export default Home;
