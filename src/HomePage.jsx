import Hero from "./homPageComponents/hero.jsx"
import About from "./homPageComponents/about.jsx"
import Services from "./homPageComponents/services.jsx"
import Pricing from "./homPageComponents/pricing.jsx"
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
