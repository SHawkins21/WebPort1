import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div className= 'w-full h-screen text-center'>
        <div className= 'max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                
                <p className='uppercase text-sm tracking-widest text-gray-600'> LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm<span className= 'text-[#5651e5]'> Samuel 

                </span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full Stack Developer 
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%]m-auto'>
                    I'm a full stack developer specializing in 
                    building exceptional digital experiences. 
                    Currently, I'm focused on building responsive 
                    front-end web applications while learning back-end 
                    technologies. 
                </p>
                <div className = 'flex item-center justify-between max-w-[330px] m-auto py-4'>
                    <div className = 'rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-400'>
                        <FaLinkedinIn /> 
                    </div>
                    <div className = 'rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-400'>
                        <FaGithub /> 
                    </div>
                    <div className = 'rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-400'>
                        <AiOutlineMail /> 
                    </div>
                    <div className = 'rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-110 ease-in duration-400'>
                        <BsFillPersonLinesFill /> 
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
};

export default Main