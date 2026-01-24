import React from 'react';
import Hero from '../components/home_sections/Hero';
import StatsSection from '../components/home_sections/StatsSection';
import MissionManifest from '../components/home_sections/MissionManifest';
import FutureBanner from '../components/home_sections/FutureBanner';

const Home = () => {
  return (
    <>
      <Hero />

      <MissionManifest />
      <FutureBanner />
    </>
  );
};

export default Home;
