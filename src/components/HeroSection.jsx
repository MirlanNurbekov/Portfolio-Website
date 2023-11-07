"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <section className="lg:py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-600 to-blue-400'>
            Mirlan Nurbekov
              </span> 
          </h1>
          <h1 className='text-white mb-2 text-2xl lg:text-4xl font-extrabold'>
          <TypeAnimation
              sequence={[
                "Software engineer",
                1000,
                "Web developer",
                1000,
                "Mobile developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
          I am well-educated software engineer with two years of web development experience. I am
seeking a position in leading hi-tech corporate environment where I can collaborate with
passionate team and harness my full potential.
          </p>
          
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-teal-800 hover:text-white'>HIRE ME</button>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-white text-black hover:bg-teal-800 hover:text-white mt-3'>Download CV</button>
          </div>
          <br></br>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image 
                src="/images/hero-image.jpeg" 
                alt='hero image' 
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={375} 
                height={375}/>
            </div>   
          </div>
      
      </div>
    </section>
  )
}

export default HeroSection;