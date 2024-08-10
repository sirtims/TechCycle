import './hero.css'
import { motion } from 'framer-motion'
const Hero = () => {
   return (
      <section id='hero' className='hero'>
         {/* hero content section */}
         <div className="hero_contents">
            <div className='hero_title'>

               <motion.p
                  className='company_name'
                  initial={{
                     transform: "translateX(-100px)",
                     opacity: 0.3
                  }}
                  animate={{
                     transform: "none",
                     opacity: 1
                  }}
                  transition={{
                     duration: 1,
                     ease: 'linear'
                  }}
               >
                  TECH<span>CYPLES</span>
               </motion.p>
            </div>
            <motion.p
               className='hero_p'
               initial={{
                  scale: 0.3,
                  opacity: 0.3
               }}
               animate={{
                  scale: 1,
                  opacity: 1
               }}
               transition={{
                  duration: 1,
                  ease: 'linear'
               }}
            >
               We create <span className='highlight'>Robust,secure and affordable website, offers graphics design</span> and promoting businesses globaly with our dynamic digital marketing skills.
            </motion.p>
            <motion.a
               className='hero_btn' href="#"
               initial={{
                  transform: "translateX(-50px)",
                  opacity: 0.3
               }}
               animate={{
                  transform: "none",
                  opacity: 1
               }}
               transition={{
                  duration: 1,
                  ease: 'linear'
               }}
            >
               Contact Us
            </motion.a>
         </div>
         {/* wave section */}
         <div className="wave wave1"></div>
         <div className="wave wave2"></div>
         <div className="wave wave3"></div>

      </section>

   )
}

export default Hero
