import React from 'react';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className ="fixed h-[12vh] z-[10] bg-blue-950 w-full">home

      
     <div className='flex items-center h-full justify-between w-[95%]  sm:w-[90%] xl:w-[80%]'>
      
           {/*LOGO */}
     <Image src= "/images/logo.png" 
     alt= "LOGO" 
     width={170} 
     height ={170}
     className="ml-[-1.5rem] sm:ml-0" 



     
     />

     {/* Nv links */}
     <div></div>


      
      </div>  


    
    
    </div>


  )
}

export default Nav

