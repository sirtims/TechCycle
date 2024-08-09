import './services.css'

import { motion } from 'framer-motion'
const itemvariants = {
   hidden: {
      x: "100px",
      opacity: 0,
      scale: 0,
   },
   visible: (index) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
         duration: 1,
         ease: "linear",
         delay: 0.15 * index
      }
   })
}
const servicesVariants = {
   initial: {
      y: 100,
      opacity: 0,
      transition: {
         duration: 1,
         ease: "linear"
      }
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: "linear"
      }
   }
}
const Services = () => {
   const services = [
      {
         id: 1,
         url: "/images/web.png",
         discription: "Web Development"
      },
      {
         id: 2,
         url: "/images/mobile.png",
         discription: "Mobile Applications"
      },
      {
         id: 3,
         url: "/images/ussd.png",
         discription: "USSD App Development"
      },
      {
         id: 4,
         url: "/images/ui.png",
         discription: "Ui/Ux Design"
      },
      {
         id: 5,
         url: "/images/ads.png",
         discription: "Digital Marketing"
      },
      {
         id: 6,
         url: "/images/graphic.jpg",
         discription: "Graphic Design"
      },
      {
         id: 7,
         url: "/images/branding.png",
         discription: "Logos/Branding"
      },
      {
         id: 8,
         url: "/images/video.png",
         discription: "3D Video Animation"
      },
      {
         id: 9,
         url: "/images/network.png",
         discription: "Networking"
      }
   ]

   return (
      <section id='services' className='services'>
         <motion.div className="services_header"
            variants={servicesVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
               once: true
            }}
         >
            <h2>Services</h2>
            <h1>Our Services</h1>
         </motion.div>
         <ul
            className='services_list'

         >
            {services.map((el) => (
               <motion.li
                  variants={itemvariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                     once: true,
                  }}
                  custom={el.id}
                  key={el.id}>
                  <img src={el.url} alt="" />
                  <h3>{el.discription}</h3>
               </motion.li>
            ))}
         </ul>
      </section>
   )
}

export default Services
