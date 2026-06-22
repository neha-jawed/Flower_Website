import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='min-h-screen  flex flex-col items-center justify-center bg-[#091D12] pb-50'>

      <div className='flex flex-col gap-5 w-3/6 mt-40 text-white text-center '>
        <motion.h1 
         animate={{ scale: [0,1], opacity: [0,1] }}
          transition={{ duration: 1, delay: 0.5 }}
        className='text-5xl font-bold text-shadow-md text-shadow-emerald-300'>Get In Touch With Us</motion.h1>
        <motion.p
         animate={{ scale: [0, 1], opacity: [0,1] }}
          transition={{ duration: 1, delay: 0.8 }}
         className='text-3xl font-[Dancing_Script]'>Have questions, special requests, or need help choosing the perfect flowers? Our team is always here to help make your floral experience beautiful and memorable.</motion.p>
      </div>
      <div className='flex flex-col gap-5 text-xl  mt-25 text-white m-5'>
        <div className='flex gap-4 '>
        <input className='bg-[#134b2c] w-3/6 px-5 py-4' type="text" placeholder='First Name' />
        <input className='bg-[#134b2c] w-3/6 px-5 py-4' type="text" placeholder='Last Name' />
        </div>
        <input className='bg-[#134b2c] w-6/6 px-5 py-4' type="text" placeholder='Enter Email Address'/>
        <input className='bg-[#134b2c] w-6/6 px-5 py-4' type="text" placeholder='Enter Phone Number'/>
        <textarea className='bg-[#134b2c] w-6/6 px-5 py-2  h-30 ' name="message" placeholder='Type Here.......'></textarea>
        <motion.button
         whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.9, y: 1 }}
         className='bg-[#134b2c] hover:bg-[#1ca75b] text-white font-bold py-3  w-6/6 rounded'>Send Message</motion.button>

      </div>
      <hr className='border border-white w-full mt-20'/>
      <div>
<div className='flex  text-neutral-400 mt-20  items-center justify-between gap-20 flex-wrap'>
<motion.div 
whileInView={{ x: [-200, 0], opacity: [0,1] }}
          transition={{ duration: 1, delay: 0.2 }}
className='flex flex-col gap-2 px-9 boder border-e-2'>
  <h1 className='text-2xl leading-19 font-bold'>Telephone</h1>
  <p>BlossomHub Helpline+9221 38227292</p>
  <p>Whatsapp: +92 300 7887292</p>
</motion.div>
<motion.div 
whileInView={{ x: [-200, 0], opacity: [0,1] }}
          transition={{ duration: 1, delay: 0.4 }}
className='flex flex-col gap-2 px-9 boder border-e-2'>
  <h1 className='text-2xl leading-19 font-bold'>Time</h1>
  <p>Mon - Fri: 9:00 AM to 6:00 PM</p>
  <p>Saturday: 9:00 AM to 4:00 PM </p>
</motion.div>
<motion.div 
whileInView={{ x: [-200, 0], opacity: [0,1] }}
          transition={{ duration: 1, delay: 0.6 }}
className='flex flex-col gap-2 px-9  boder border-e-2'>
  <h1 className='text-2xl leading-19 font-bold'>Email</h1>
  <p>FOR ORDER QUERIES</p>
  <p>Email: sale@blossomhub.pk </p>
</motion.div>
</div>
      </div>
  
    </div>
  )
}

export default Contact
