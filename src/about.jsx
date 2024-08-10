import './about.css'
import { motion } from 'framer-motion'
const devVariants = {
   hidden: {
      x: "-100px",
      opacity: 0,
      transition: {
         duration: .5,
         ease: "linear",

      }
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: .5,
         ease: "linear",

      }
   }
}
const aboutVariants = {
   hidden: {
      x: "100px",
      opacity: 0,
      transition: {
         duration: 0.5,
         ease: "linear",
      }
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 0.5,
         ease: "linear",

      }
   }
}
const itemVariants = {
   initial: {
      scale: 0.3,
      opacity: 0,
      transition: {
         duration: .5,
         ease: "linear"
      }
   },
   animate: {
      scale: 1,
      opacity: 1,
      transition: {
         duration: .5,
         ease: "linear"
      }
   }
}

const About = () => {
   const details = [
      {
         id: 1,
         url: "/images/Fast.png",
         heading: "We're Fast",
         message: "We deliver all projects as fast as possible, our websites are automated and get delivered to you almost instantly."
      },
      {
         id: 2,
         url: "/images/Reliable.png",
         heading: "Reliable",
         message: "With our several years of experience and engineers, we have learnt in the past years to be able to fully optimize our platform for reliability and dependability."
      },
      {
         id: 3,
         url: "/images/Satisfactory.png",
         heading: "100% Satisfactory",
         message: "WWe make our project suite your taste/demands perfectly, just as you wish. Here at MSORG Developers, we make your dreams come true, just the way you wish."
      }
   ]
   return (
      <section>
         <div className="about_wrapper">
            <motion.div className="about_img"
               variants={devVariants}
               initial="hidden"
               whileInView="animate"
               viewport={{
                  once: true,
               }}
            >
               <img src="/images/dev1.avif" alt="" />
            </motion.div>
            <div className="about_info">
               <motion.div
                  className='intro'
                  variants={aboutVariants}
                  initial="hidden"
                  whileInView="animate"
                  viewport={{
                     once: true,
                  }}
               >
                  <h2 className='about_info_h1'>Who we are</h2>
                  <p className='about_info_p'>we build websites that are not only visually
                     beautiful, but also functionally effective.
                     Our team of web strategists, designers,
                     developers, and project managers work together
                     to help
                     clients meet their business objectives.
                  </p>
               </motion.div>
               <ul className="about_info_ul">
                  {
                     details.map(el => (
                        <motion.li className="about_info_li" key={el.id}
                           variants={itemVariants}
                           initial="initial"
                           whileInView="animate"
                           viewport={{
                              once: true,
                           }}
                        >
                           <img src={el.url} alt="" />
                           <div className='about_info_li_info'>
                              <h3 className='about_info_li_info_h3'>{el.heading}</h3>
                              <p>{el.message}</p>
                           </div>
                        </motion.li>
                     ))
                  }

               </ul>
            </div>
         </div>
      </section>
   )
}

export default About
