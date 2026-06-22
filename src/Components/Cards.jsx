import React from 'react'
import flower1 from '../assets/flower1.PNG'
import flower2 from '../assets/flower2.PNG'
import flower3 from '../assets/flower3.PNG'
import { motion } from 'framer-motion'

const Cards = () => {





  const data = [
    {
      id: 1,
      bgColor: 'bg-red-200',
      image: flower1,
      title: '🌹 Fresh and elegant rose flower, perfect for gifting and decoration. ✨',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus culpa nulla cum nobis porro fuga animi adipisci sint repellendus earum laudantium et recusandae repellat, accusamus dolor? Eos, mollitia nulla.',
      price: 'Rs.1800',
      oldPrice: 'Rs.2000',
      button: 'Add to cart',
    },
    {
      id: 2,
      bgColor: 'bg-yellow-100',
      image: flower2,
      title: '🌻 Bright and cheerful sunflower, perfect for adding warmth and happiness to any space. ✨',
      price: 'Rs.1500',
      oldPrice: 'Rs.2000',
    },
    {
      id: 3,
      bgColor: 'bg-pink-400',
      image: flower3,
      title: '🌸 Soft and beautiful pink flower, perfect for expressing love, grace, and sweetness. ✨',
      price: 'Rs.2000',
      oldPrice: 'Rs.2500',
    },
  ]
  return (

    <div className=' flex flex-col gap-5 items-center justify-center  py-[15vh]  '>

      {
        data.map((data, index) => {
          return (
            <div key={data.id} 
            className={`w-[90vw] md:w-[77vw] min-h-[70vh] sticky top-[10vh] flex  flex-col md:flex-row items-center gap-6 md:gap-10 p-6 
            md:p-15 ${data.bgColor}`}>
              <img className='w-80 h-70 md:w-80 h-80' src={data.image} alt="flower" />

              <div className='flex flex-col gap-5 px-2 md:px-5 py-5'>
                <h1 className='text-2xl md:text-5xl font-[Popines]'>{data.title}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi delectus culpa nulla cum nobis porro fuga animi adipisci sint repellendus earum laudantium et recusandae repellat, accusamus dolor? Eos, mollitia nulla.</p>

                <p className='text-2xl md:text-4xl font-bold'>{data.price} <span className='text-sm line-through'>{data.oldPrice}</span></p>
                <motion.button
                 animate={{ scale: [1,1.08,1] }}
       transition={{duration:1,delay:1, repeat : Infinity ,ease:"easeInOut" ,repeatDelay:1}}
                 className='border boder-white bg-black text-white w-5/6 ml-15` px-4 py-2
              md:px-3 md:py-3 rounded-xl '>Add to cart</motion.button>

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards
