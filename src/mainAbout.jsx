import { motion } from "framer-motion"
import "./mainAbout.css"
import { useState } from "react"
const servicesVariants = {
   initial: {
      y: 100,
      opacity: 0,
      transition: {
         duration: .5,
         ease: "linear"
      }
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: .5,
         ease: "linear"
      }
   }
}
const cartegories = ["All", "Website", "Gaphics", "Apps"]

const MainAbout = () => {
   const [isActive, setIsActive] = useState(null)
   const [btnState, setBtnState] = useState(true)
   const handleChange = (index) => {
      setIsActive(index)
      setBtnState(false)
   }
   const getStyle = (index) => {
      return index === isActive ? {
         background: "rgb(255, 187, 0)", color: "#ffffff"
      } : {};
   }
   return (
      <section className="mainAbout">
         <div className="mainAbout_about">
            <img src="/images/about_placeHolder.jpg" alt="" />
            <div className="details">
               <h1>About TECHCYPLES</h1>
               <p className="italics">Founded on the 19th of October, 2018 by SIMISOLA DAVID.</p>
               <p>TECHCYCLE is an organization that was built to help solve human problems(technologically), ranging from</p>
               <p>Building Robust and Dynamic Websites</p>
               <p>Promoting Business/Brands via Graphical Advertisement and
                  our Digital Marketing Strategies</p>
               <p>Creating mobile application for both Android and Ios Devices.</p>
            </div>
         </div>
         <div className="mainAbout_websits">
            <img src="/images/dev2.png" alt="" />
            <div className="web">
               <h1>Hosted Websites:</h1>
               <p>Below is a list of some of our hosted and completed website projects:</p>
               <p><span className="click italics"><a href="#">click here</a></span> to view more</p>
            </div>
         </div>
         <div id='portfolio' className="mainAbout_projects">
            <motion.div className="services_header"
               variants={servicesVariants}
               initial="initial"
               whileInView="animate"
               viewport={{
                  once: true
               }}
            >
               <h2>OUR PORTFOLIO</h2>
               <h1>COMPLETED PROJECTS</h1>
            </motion.div>
            <ul className="web_cart">
               {cartegories.map((el, index) => (
                  <li className={index === 0 && btnState === true ? "activeBtn" : ""} onClick={() => handleChange(index)}
                     style={getStyle(index)}
                     key={index}>

                     {el}
                  </li>
               ))}
            </ul>
         </div>

      </section>
   )
}

export default MainAbout
