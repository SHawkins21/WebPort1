import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className= 'flex justify-between item-center w-full h-full px-2 2xl:px-16'>

            <Image 
            src="/../public/assets/navlogo.png" 
            alt="/" 
            width='125' 
            height='50' 
            /> 
            {/*When importing an image there will be an error unless with and height are applied and must start with a 
            leading slash {src="/* <= indicated here  */}
        </div>
        <div>
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




        
    </div>

    


    
    

    
  )
}

export default Navbar

