import PricingComponents from "./pricingComponent"
import { motion } from "framer-motion"
import './pricing.css'
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
const bronzeInfo = [
   {
      id: 1,
      url: "/images/Burger.png",
      info: "Data"

   },
   {
      id: 2,
      url: "/images/Burger.png",
      info: "Airtime(VTU/MOMO, Share and sell "

   },
   {
      id: 3,
      url: "/images/Burger.png",
      info: "Hosting & Domain - 1 year(.com/.ng/.com.ng)"

   },
   {
      id: 4,
      url: "/images/Burger.png",
      info: "Hosting & Domain - 1 year(.com/.ng/.com.ng)"

   },
]
const sliverInfo = [
   {
      id: 1,
      url: "/images/Burger.png",
      info: "Data"

   },
   {
      id: 2,
      url: "/images/Burger.png",
      info: "Airtime(VTU/MOMO, Share and sell "

   },
   {
      id: 3,
      url: "/images/Burger.png",
      info: "Hosting & Domain - 1 year(.com/.ng/.com.ng)"

   },
   {
      id: 4,
      url: "/images/Burger.png",
      info: "Hosting & Domain - 1 year(.com/.ng/.com.ng)"

   },
   {
      id: 5,
      url: "/images/Burger.png",
      info: "Bill Payment"

   },
   {
      id: 6,
      url: "/images/Burger.png",
      info: "Airtime to Cash"

   },
   {
      id: 7,
      url: "/images/Burger.png",
      info: "Cable Subscription"

   },
]
const goldInfo = [
   {
      id: 1,
      url: "/images/Burger.png",
      info: "Data"

   },
   {
      id: 2,
      url: "/images/Burger.png",
      info: "Airtime(VTU/MOMO, Share and sell "

   },
   {
      id: 3,
      url: "/images/Burger.png",
      info: "Education Pin (WEAC & NECO)"

   },
   {
      id: 4,
      url: "/images/Burger.png",
      info: "Hosting & Domain - 1 year(.com/.ng/.com.ng)"

   },
   {
      id: 5,
      url: "/images/Burger.png",
      info: "Bill Payment"

   },
   {
      id: 6,
      url: "/images/Burger.png",
      info: "Airtime to Cash"

   },
   {
      id: 7,
      url: "/images/Burger.png",
      info: "Bulk SMS"

   },
   {
      id: 8,
      url: "/images/Burger.png",
      info: "Cable Subscription"

   },
]

const diamondInfo = [
   {
      id: 1,
      url: "/images/Burger.png",
      info: "Data"

   },
   {
      id: 2,
      url: "/images/Burger.png",
      info: "Airtime(VTU/MOMO, Share and sell "

   },
   {
      id: 3,
      url: "/images/Burger.png",
      info: "Education Pin (WEAC & NECO)"

   },
   {
      id: 4,
      url: "/images/Burger.png",
      info: "Hosting & Domain - 1 year(.com/.ng/.com.ng)"

   },
   {
      id: 5,
      url: "/images/Burger.png",
      info: "Bill Payment"

   },
   {
      id: 6,
      url: "/images/Burger.png",
      info: "Airtime to Cash"

   },
   {
      id: 7,
      url: "/images/Burger.png",
      info: "Bulk SMS"

   },
   {
      id: 8,
      url: "/images/Burger.png",
      info: "Cable Subscription"

   },
   {
      id: 9,
      url: "/images/Burger.png",
      info: "Smile Data"

   },
   {
      id: 10,
      url: "/images/Burger.png",
      info: "Recharge Printing"

   },
]

const Pricing = () => {

   const bronzDetails = {
      title: "BRONZE",
      price: "₦180,000"
   }

   const silverDetails = {
      title: "SILVER",
      price: "₦200,000"
   }

   const goldDetails = {
      title: "GOLD",
      price: "₦230,000"
   }

   const diamondDetails = {
      title: "DIAMOND",
      price: "₦230,000"
   }
   const bg = {
      titleBg: "Bg",
      btnBg: "Bg"
   }

   return (
      <section id='pricing' className="pricing_main">
         <div className="price_main_inner_wrapper">
            <motion.div className="services_header"
               variants={servicesVariants}
               initial="initial"
               whileInView="animate"
               viewport={{
                  once: true
               }}
            >
               <h2>VTU WEBSITE</h2>
               <h1>PRICING</h1>
            </motion.div>
            <div className="pricing_main_wrapper">
               <PricingComponents info={bronzeInfo} className={bg} details={bronzDetails} />
               <PricingComponents info={sliverInfo} className={bg} details={silverDetails} />
               <PricingComponents info={goldInfo} className={bg} details={goldDetails} />
               <PricingComponents info={diamondInfo} className={bg} details={diamondDetails} />

            </div>
         </div>
      </section>
   )
}

export default Pricing
