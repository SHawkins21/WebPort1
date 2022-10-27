import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg'


const property = () => {
  return (
    <div className= 'w-full'>
        <div className= 'w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={propertyImg} alt='/' /> 
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className= 'py-2'>Property Finder</h2>
                <h3>React JS / Tailwind / Firebase</h3>
            </div>
        </div>
    
    
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p> Project</p>
            <h2>Overview</h2>
            <p>
              What I learned 
              Why I wanted to do this project 
            </p>
            <button className='px-8 py-2 mt-4 mr-8 bg-[#5651e5]'>Demo</button>
            <button className='px-8 py-2 mt-4 bg-[#5651e5]'>Code</button>
          </div>

        </div>
      
    
    
    </div>

  );
};

export default property