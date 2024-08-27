import Hero from "./homPageComponents/hero"
import About from "./homPageComponents/about"
import Services from "./homPageComponents/services"
import Pricing from "./homPageComponents/pricing"
import Result from "./homPageComponents/result.jsx"
import MainAbout from "./homPageComponents/mainAbout.jsx"
import Slider from "./homPageComponents/slider.jsx"
import Contact from "./homPageComponents/contact.jsx"
const HomePage = () => {
   return (
      <div>
         <Hero />
         <About />
         <Services />
         <Pricing />
         <Result />
         <MainAbout />
         <Slider />
         <Contact />

      </div>
   )
}

export default HomePage
