import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:frid-cols-12'>
        <div className='col-span-7 place-self-center'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Portfolio website
          </h1>
          <h1 className='text-white'>Mirlan Nurbekov</h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl'>
            Mirlan Nurbekov is a great programmer, trust me on that.
          </p>
          
          <div className='col-span-5'>
            <Image 
            src="/images/hero-image.jpeg"
            alt='hero image'
            width={500}
            height={500}
            />
              
          </div>
        </div>
      
      </div>
    </section>
  )
}

export default HeroSection;