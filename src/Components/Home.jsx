import React, { useState } from 'react'
import bg from '../assets/flowerbg.jpg'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import boque from '../assets/boque.png'

import { useRef } from 'react'
import butterfly1 from '../assets/Butterfly.png'
import butterfly2 from '../assets/BrownButterfly.png'
import butterfly3 from '../assets/Purplebutterfly.png'
import { useNavigate } from 'react-router-dom'
import Cards from './Cards'


const Home = () => {

const navigate = useNavigate()
  const boxRef = useRef()
  const isMobile = window.innerWidth < 768

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, 550])
  const x1 = useTransform(scrollY, [0, 800], [0, 60])
  const rotate1 = useTransform(scrollY, [0, 500], [0, 360])


  const y2 = useTransform(scrollY, [0, 800], [0, 650])
  const x2 = useTransform(scrollY, [0, 800], [0, isMobile ? 100 : -400])
  const rotate2 = useTransform(scrollY, [0, 500], [0, 350])

  const y3 = useTransform(scrollY, [0, 800], [0, 600])
  const x3 = useTransform(scrollY, [0, 800],  [0, isMobile ? -200 : -500])
  const rotate3 = useTransform(scrollY, [0, 500], [0, 360] )


  return (
    // Page 1

    <div className='min-h-screen  relative '>
      <div
        className="  h-screen bg-cover bg-top  flex flex-col items-center justify-center  opacity-100 rounded-b-4xl  inset-shadow-sm inset-shadow-black/90 "
        style={{ backgroundImage: `url(${bg})` }}>


        <motion.div
          animate={{ scale: [0, 1, 1], y: 3 }}
          transition={{ duration: 2, delay: 1 }}
          className='text-white mt-7 flex flex-col items-center justify-center gap-3 '>
          <h1 className='text-[3vmax] font-serif font-medium border-dotted border '>Welcome to the Bloosom Garden</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,a!</p>
          <motion.button
          onClick={()=> navigate ('/about-us')}
            whileHover={{ scale: 1.05, y: 5 }}
            whileTap={{ scale: 0.9, y: 1 }}

            className=' bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-mono py-2 px-4 hover:border shadow-amber-50 shadow-sm'>More About</motion.button>
        </motion.div>
        {/* Butterfly  */}

        <motion.img
        style={{y:y1,x:x1,rotate:rotate1}}
          animate={{ rotate: [0, 50, 0, -50, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileDrag={{
            scale: 1,
          }}
          dragDirectionLock:true
          dragElastic={0.5}
          className='w-15 md:w-23 absolute left-10 top-1/7 ' src={butterfly1} alt="butterfly" ></motion.img>





        <motion.img
         style={{y:y2,x:x2,rotate:rotate2}}
          animate={{ rotate: [0, 50, 0, -50,0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileDrag={{
            scale: 1,
          }}
          dragDirectionLock:true
          dragElastic={0.5}
          className='w-15 md:w-20 absolute  top-120 ' src={butterfly2} alt="butterfly" ></motion.img>

    

       
       

        <motion.img
        style={{ y:y3, x:x3 ,rotate:rotate3}}
          animate={{ rotate: [0, 50, 0, -50, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
       
          dragDirectionLock:true
          dragElastic={0.5}
          className='w-15 md:w-20 absolute right-15 mt-20 ' src={butterfly3} alt="butterfly" ></motion.img>
      </div>




      {/* Page 2  */}





      <div className=' bg-white '>


        <div className='mt-30 flex items-center justify-between px-15 py-19 flex-wrap gap-10 '>
          <img className='text-xl ml-10' src={boque} alt="flower boque" />

          <motion.div className='overflow-x-hidden  md:w-4/12 w-6/6  flex flex-col items-start justify-end gap-5 mr-9 origins-right'>
            <motion.h1
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}



              className='text-4xl font-[Popines] font-medium border-dotted border p-3 '>Step Into The Garden</motion.h1>
            <motion.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className='text-2xl font-[Dancing_Script] leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio obcaecati et, porro voluptates excepturi, ratione itaque autem aliquam numquam ex ut tenetur quo incidunt corporis deleniti vel velit quae nesciunt reprehenderit. Ipsam porro tempore illo, quo minima asperiores aliquam dignissimos iusto sapiente, cum sequi obcaecati, magni ratione odit reiciendis. Voluptatibus.</motion.p>
          </motion.div>
        </div>
        </div>
<Cards />
      </div>



  )
}

export default Home
