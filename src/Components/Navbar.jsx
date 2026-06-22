import React from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger} from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { motion, useScroll } from 'motion/react'
import { useGSAP  } from '@gsap/react'
import { gsap } from 'gsap'

import { useRef } from 'react'
const Navbar = () => {
let menu = () =>{
    const sidebar = document.getElementById('sidebar')
    sidebar.style.top= '0 '
    sidebar.style.transition= '0.4s'  ;
}
let close = () =>{
     const sidebar = document.getElementById('sidebar')
     sidebar.style.top = '-70%'
      sidebar.style.transition= '0.4s'  ;
}


const boxRef = useRef()
  useGSAP(() => {
    gsap.from(boxRef.current, {
  y: -50,
  stagger: 0.5,
  opacity: 0,
  duration: 2,
  delay: 1,  
  } )}, [])
  return (
    <>
   
  <div  id='sidebar' className="lg:hidden py-4 top-[-70%] z-999 -80  w-full h-50 fixed opacity-80 right-0  bg-white text-black ">
                
                <IoMdClose onClick={close}  className='text-3xl  block absolute top-5 right-5 '/>
         <div className=' gap-6 font-bold flex-col  flex  items-center'>
        <Link className='hover:underline' to='/'  >Home</Link>
        <Link className='hover:underline' to='/about-us'  >About us</Link>
        <Link className='hover:underline' to='/flowers'  >Flowers</Link>
        <Link className='hover:underline'  to='/contact-us'  >Contact us</Link> 
        </div>
        </div>
   
      <motion.div 
        className='fixed top-2 left-0  w-full z-50 font-medium h-20   flex items-center justify-between bg-amber-50   text-black rounded-xl inset-shadow-sm inset-shadow-black/90   '>
        <h1  className=' ml-5 text-[5vmin] font-[Dancing_Script]'>BlossomHub</h1>
        <div ref={boxRef} className=' items-center  gap-10 mr-20 text-xl  hidden md:flex font-serif'>

          <Link className='hover:underline' to='/'  >Home</Link>
          <Link className='hover:underline' to='/about-us'  >About us</Link>
          <Link className='hover:underline' to='/flowers'  >Flowers</Link>
          <Link className='hover:underline' to='/contact-us'  >Contact us</Link>
        </div>
         <CiMenuBurger onClick={menu} className='text-3xl font-bolder mr-5 block  md:hidden'/>



      </motion.div>

    </>
  )
}

export default Navbar
