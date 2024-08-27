import "./slider.css"
import { useEffect, useState } from "react"
// import { Circle, CircleDot } from "lucide-react"

const content = [
   {
      url: "/images/head_man.webp",
      name: "TIMOTHY OMAFE",
      profession: "Frontend Developer",
      about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam error recusandae fuga, assumenda enim ",

   },
   {
      url: "/images/head_woman.webp",
      name: "JOY PETER",
      profession: "Graphic Designer",
      about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam error recusandae fuga, assumenda enim exercitationem animi dolorum impedit laborum perferendis dolor rerum, nemo ",



   },
   {
      url: "/images/head_man.webp",
      name: "TOPSON SEGUN",
      profession: "Data Analyst",
      about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam error recusandae fuga, assumenda enim exercitationem animi dolorum impedit .",

   },
   {
      url: "/images/head_woman.webp",
      name: "GRACE MICHA",
      profession: "Product Tester",
      about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam error recusandae fuga, assumenda enim exercitationem animi dolorum impedit laborum perferendis dolor rerum, nemo illo! Quaerat at voluptates praesentium officia iusto.",

   },
]

const Slider = () => {
   const [currentIndex, setCurrentIndex] = useState(0)
   // const [direction, setDirection] = useState('next')



   useEffect(() => {
      const slideInterval = setInterval(() => {
         // setDirection("next")
         nextSlide()
      }, 5000)

      return () => clearInterval(slideInterval);
   }, [])


   // const previousSlide = () => {
   //    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
   // };

   const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
   };

   return (
      <section className="slider_wrapper">
         <div className="slider">
            {content.map((el, index) => (
               <div className={`slide_content ${index === currentIndex ? "active" : ''
                  } `}
                  style={{ translate: `${-100 * currentIndex}%` }}
                  key={index}>
                  <img src={el.url} alt="" />
                  <h2>{el.name}</h2>
                  <h3>{el.profession}</h3>
                  <p>{el.about}</p>
               </div>
            ))}
            <div className="slideBtn">
               {content.map((_, index) => (
                  <button className={`slide_btn ${index === currentIndex ? "activeBtn" : ""}`} key={index} onClick={() => setCurrentIndex(index)}></button>
               ))}
            </div>
         </div>

      </section>
   )
}

export default Slider


/**
 * 
 * const slides = document.querySelectorAll('.slider-image');
let slideCurrentIndex = 0;
let intervalId = null;


document.addEventListener('DOMContentLoaded', initializedSlides());

 function initializedSlides(){
   if(slides.length >= 0){
      slides[slideCurrentIndex].classList.add('displaySlide');
      intervalId = setInterval(next,5000);
   }
 }


 function showSlides(index){
   if(index >= slides.length){
      slideCurrentIndex = 0
   }
   else if(index < 0){
      slideCurrentIndex = slides.length - 1
   }
   slides.forEach( slide => {
      slide.classList.remove('displaySlide')
   });
   slides[slideCurrentIndex].classList.add('displaySlide');
 }
 function previous(){
   clearInterval(intervalId )
   slideCurrentIndex --
   showSlides(slideCurrentIndex)
 }
 function next(){
   slideCurrentIndex ++
   showSlides(slideCurrentIndex)

 }
 */