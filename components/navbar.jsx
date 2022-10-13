import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className= 'flex justify-between item-center w-full h-full px-2 2xl:px-16'>
            <Image 
            src='/../public/assets/navlogo.png'
            alt='/' 
            width='125' 
            height='50' 
            /> 
            {/*When importing an image there will be an error unless with and height are applied and must start with a 
            leading slash {src="/* <= indicated here  */}
        
         
            <ul className='hidden md:flex'>
                 {/* Link uses href='' unlike React which uses to
                 The below is what creates the diffrent uses for the nav bar at the top*/}
                <Link href='/'>
                    <li className= 'ml-10 text-sm uppercase hover:border-bottom'>Home</li>
                </Link>

                <Link href='/'>
                    <li className= 'ml-10 text-sm uppercase hover:border-bottom'>About</li>
                </Link>

                <Link href='/'>
                    <li className= 'ml-10 text-sm uppercase hover:border-bottom'>Skills</li>
                </Link>

                <Link href='/'>
                    <li className= 'ml-10 text-sm uppercase hover:border-bottom'>Projects</li>

                </Link>

                <Link href='/'>
                    <li className= 'ml-10 text-sm uppercase hover:border-bottom'>Contact</li>
                </Link>
            </ul>
            <div className='md:hidden'>
                <AiOutlineMenu size={25} />
            </div>
        </div>
    
                 {/*this created the Side menu and the background part of the screen*/}
    <div className= 'fixed left-0 top-0 w-full h-screen bg-black/70' >
        <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src='/../public/assets/navlogo.png' width='87' height='35' alt='/'/> 
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose /> 
              </div>  
             </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>
                       Let's Build Something Together  
                    </p>
                </div>
            </div>
                <div className='py-4 flex flex-col'>
                 <ul className='uppercase'>
                    <Link href='/'>
                     <li className='py-4 text-sm'>Home
                     </li>
                    </Link> <Link href='/'>
                     <li className='py-4 text-sm'>About
                     </li>
                    </Link> <Link href='/'>
                     <li className='py-4 text-sm'>Skills
                     </li>
                    </Link> <Link href='/'>
                     <li className='py-4 text-sm'>Projects
                     </li>
                    </Link> <Link href='/'>
                     <li className='py-4 text-sm'>Home
                     </li>
                    </Link>
                    <Link href='/'>
                     <li className='py-4 text-sm'>Contact
                     </li>
                    </Link>
                 </ul>
                 <div className='pt-40'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>
                        Let's Connect 
                        </p>
                    <div className='flex items-center justify-between my-4 w-ful sm;w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-400'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-400'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-400'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-400'>
                            <BsFillPersonLinesFill />
                        </div>
                        
                   </div>
                 </div>
                </div>
        </div>
    </div>





    
</div>

    
    

    
  )
}

export default Navbar

