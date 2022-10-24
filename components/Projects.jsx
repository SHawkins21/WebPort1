import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import propertyImg from '../public/assets/projects/property.jpg'
import ProjectItem from './ProjectItem'; 
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
         <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Projects
        </p>
         <h2 className='py-4'>What I've Built</h2>
         <div className='grid md:grid-cols-2 gap-8'>
         <ProjectItem 
           title='Property Finder' 
           backgroundImg={propertyImg} 
           projectUrl='/prperty'
         />  
          <ProjectItem 
           title='Crypto App' 
           backgroundImg={cryptoImg} 
           projectUrl='/prperty'
         /> 
          <ProjectItem 
           title='Netflix App' 
           backgroundImg={netflixImg} 
           projectUrl='/prperty'
         /> 
          <ProjectItem 
           title='Twitch App' 
           backgroundImg={twitchImg} 
           projectUrl='/prperty'
         />         
        </div>
      </div>
    </div>
  )
}

export default Projects;