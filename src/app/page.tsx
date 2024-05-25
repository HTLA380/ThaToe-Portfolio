import IntroSection from '@/containers/home-page/intro-section/page';
import LandingSection from '@/containers/home-page/landing-section';
import React from 'react';

const Home = () => {
  return (
    <main className='flex justify-center pb-20'>
      <div className='max-w-800px'>
        <LandingSection />
        <IntroSection />
      </div>
    </main>
  );
};

export default Home;
