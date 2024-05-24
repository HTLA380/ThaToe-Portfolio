import Image from 'next/image';
import React from 'react';

const LandingSection = () => {
  return (
    <section className='bg-image w-full h-screen flex items-center justify-center'>
      <div className='w-full max-w-4xl relative flex items-center justify-center'>
        <Image
          draggable={false}
          priority={true}
          src={'/assets/images/landing-image.png'}
          alt='creative film'
          width={850}
          height={600}
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit flex items-center justify-center flex-col gap-6 pt-14'>
          <h3 className='bg-cyan_color font-semibold text-2xl px-3'>filmmaking & creative content*</h3>
          <p className='text-sm text-center font-bold text-gray-800'>H3in Productions</p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
