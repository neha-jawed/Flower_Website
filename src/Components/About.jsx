import React from 'react'
import skybg from '../assets/skybg.PNG'
import butterfly1 from '../assets/Butterfly.png'
import butterfly2 from '../assets/BrownButterfly.png'
import { motion} from 'motion/react'
const About = () => {
  return (
    <div className='min-h-screen pb-10'>


      <div className='h-screen   bg-cover  bg-bottom  flex flex-col items-center justify-center  opacity-90 rounded-b-4xl '  
      style={{ backgroundImage: `url(${skybg})` }}>

 <motion.img
       
          animate={{ rotate: [0, 50, 0, -50, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileDrag={{
            scale: 1,
          }}
          dragDirectionLock:true
          dragElastic={0.5}
          className='w-20 absolute top-40 left-90' src={butterfly1} alt="butterfly" ></motion.img>





        <motion.img
          animate={{ rotate: [0, 50, 0, -50,0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          whileDrag={{
            scale: 1,
          }}
          dragDirectionLock:true
          dragElastic={0.5}
          className='w-18 absolute top-40 right-90 ' src={butterfly2} alt="butterfly" ></motion.img>

    


    <div className='w-[90vw] md:w-[60vw] min-h-60 mt-24 md:mt-20 flex items-center justify-center flex-col text-center'>

      <motion.h1
        animate={{ scale: [0,1], opacity: [0,1] }}
          transition={{ duration: 1, delay: 0.5 }}
       className='text-[3vmax] font-medium'>Every Flower Tells A Beautiful Story</motion.h1>
      <motion.p 
      animate={{ x: [200, 0], opacity: [0,1] }}
          transition={{ duration: 1, delay: 1 }}
      className='text-base'>At Bloomora, flowers are more than just beautiful arrangements — they are a way to express love, joy, comfort, and unforgettable memories. We started our journey with a simple passion for nature and a dream to bring fresh, elegant blooms into people’s lives.

Every bouquet we create is carefully designed with creativity, care, and attention to detail. From soft pastel roses to vibrant seasonal flowers, our collection is inspired by the beauty of every season and the emotions behind every occasion.

Whether you are celebrating a birthday, wedding, anniversary, or simply want to brighten someone’s day, Bloomora is here to make every moment feel special. We believe that flowers have the power to transform spaces, create smiles, and leave lasting impressions.

Our mission is to provide fresh, high-quality flowers with modern and aesthetic designs that reflect elegance and warmth. We are dedicated to making floral experiences memorable through beautiful arrangements, thoughtful presentation, and reliable service.

At Bloomora, every petal tells a story, and every bloom is chosen with love.</motion.p>
      </div>
      </div>
      <hr className='mt-30 border-2 border-dashed' />
    </div>
  )
}

export default About
