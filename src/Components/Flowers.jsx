import React from 'react'
import flower1 from '../assets/flower1.PNG'
import flower2 from '../assets/flower2.PNG'
import flower3 from '../assets/flower3.PNG'
import flower4 from '../assets/flower4.PNG'
import flower5 from '../assets/flower5.PNG'
import flower7 from '../assets/flower7.PNG'
import flower8 from '../assets/flower8.PNG'
import { motion } from 'framer-motion'
const Flowers = () => {
const data = [
  {
    id: 1,
    image: flower1,
   title:'Velvet Rose Bloom 🌹',
   price:'Rs.1800',
   oldPrice:'Rs.2000',},
  {
    id: 2,
    image: flower2,
   title:'Golden Sunflower Garden 🌻',
   price:'Rs.1200',
   oldPrice:'Rs.2000',},
  {
    id: 3,
    image: flower3,
   title:'Blush Pink Petals 🌸',
   price:'Rs.2000',
   oldPrice:'Rs.2500',},
  {
    id: 4,
    image: flower4,
   title:'Cotton Candy Bloom 💗🤍',
   price:'Rs.1900',
   oldPrice:'Rs.2500',},
  {
    id: 5,
    image: flower5,
   title:'Velvet Rose 🌹',
   price:'Rs.1000',
   oldPrice:'Rs.1500',},
  {
    id: 6,
    image: flower7,
   title:'Soft Ivory Blossom ✨',
   price:'Rs.2000',
   oldPrice:'Rs.2900',},
  {
    id: 7,
    image: flower8,
   title:'Blush Pink Petals 🌸',
   price:'Rs.1800',
   oldPrice:'Rs.2500',},
  {
    id: 8,
    image: flower1,
   title:'Fresh Rose Bouquet 🌹',
   price:'Rs.1800',
   oldPrice:'Rs.2500',},
  {
    id: 9,
    image: flower2,
   title:'Sunflower Delight 🌻',
   price:'Rs.1800',
   oldPrice:'Rs.2500',},

]




  return (
  <div className='min-h-screen pb-30 flex flex-col items-center justify-center'>

<h1 className='text-6xl p-4 text-black mt-40 font-[Popines] border border-dotted'>New Arrivals</h1>
  <div className='min-h-screen w-10/12 mt-25 flex items-center justify-between  flex-row flex-wrap gap-10 p-10 rounded-3xl'>

   {
    data.map((data,item)=>{
      return ( <div key={data.id} className='flex flex-col  gap-3 border inset-shadow-sm inset-shadow-black p-10 rounded-3xl items-center justify-center'>
      <img
        src={data.image}
        alt=""
        className='w-60 h-60 object-cover rounded-3xl'
      />

      <h1 className='text-xl font-[Poppins]'>{data.title}</h1>

      <p className='text-base flex gap-2  font-bold'>
        {data.price}
        <span className='line-through items-center flex text-xs'>
          {data.oldPrice}
        </span>
      </p>
       <motion.button 
       animate={{ scale: [1,1.08,1] }}
       transition={{duration:1,delay:1, repeat : Infinity ,ease:"easeInOut" ,repeatDelay:1}}
     
           
       className='border-2 border-neutral-500 bg-black text-white  inset-shadow-white inset-shadow-sm   px-7 py-3 rounded-xl '>Add to cart</motion.button>
    </div>
)
    })
   }
  </div>

</div>
  )
}

export default Flowers
