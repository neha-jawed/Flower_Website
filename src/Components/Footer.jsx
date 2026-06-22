import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20 bg-gradient-to-r from-green-500 to-yellow-500  flex items-start flex-wrap  justify-between text-white px-12 py-9 '>

      <div className='flex flex-col justify-between gap-5 text-white w-50'>
<h1 className='text-2xl border inset-shadow-sm inset-shadow-black/90 rounded-3xl text-center p-2 font-extrabold'>Blossom Hub</h1>
<p >BlossomHub.pk – Karachi’s Premier Online Flower Shop Discover exquisite bouquets and floral arrangements, crafted with care to brighten every occasion. Fresh, vibrant, and delivered straight to your doorstep.</p>
      </div>

      <div className='flex flex-col   gap-3  text-white w-50 '>
        <h1 className='text-2xl font-bold'>Home</h1>
        <h1>About us</h1>
        <h1>My Account</h1>
        <h1>Contact us</h1>
      </div>
      <div className='flex flex-col  gap-3  text-white w-50 '>
        <h1 className='text-2xl font-bold'>Blog</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms of Services</h1>
        <h1>Terms & Conditions</h1>
        <h1>Refund & Returns Policy</h1>
      </div>
      <div className='flex flex-col  gap-3 w-50'>
        <h1 className='text-2xl font-bold'>Contact Us</h1>
        <p>Karachi, Pakistan</p>
        <p>+92 123 456 7890</p>
        <p>+92 123 196 3590</p>
        <p>Contact@blossomhub.pk</p>
      </div>
        <hr className='w-full text-black  mt-6 mb-2'/>
  <div className='flex  items-center justify-center w-full text-neutral-700 '>

        <p>© 2026. All Rights Reserved.</p>
</div>
      
    </div>
  )
}

export default Footer
