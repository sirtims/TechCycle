import "./resultComponent.css"
import { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'
const ResultComponent = ({ details, className }) => {
   const [counter, setCounter] = useState(0)
   const [isVisible, setIsVisible] = useState(false)
   const ref = useRef()
   let val = details.value
   const handleChange = () => {

      if (typeof val === "number") {
         let timer
         val < 100 ? timer = 50 : timer = 5
         setInterval(() => {
            setCounter(preveCount => {
               if (preveCount + 1 > val) {
                  clearInterval()
                  return preveCount
               }
               return preveCount + 1
            })

         }, timer)
      }
      else {
         setCounter(val)
      }
   }
   useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect
         }
      }, { threshold: 0.1, })


      if (ref.current) {
         observer.observe(ref.current);
      }
      return () => {
         if (ref.current) {
            observer.unobserve(ref.current);
         }
      };


   }, [])
   useEffect(() => {
      if (isVisible) {
         handleChange()
      }
   }, [isVisible]);


   return (
      <div ref={ref} className={`resultCom_wrapper ${typeof val !== "number" ? "small_cont" : ''} ${className}`}>
         <div className="smiley">
            <img src={details.url} alt="" />
         </div>
         <div className="result_details">
            <h1 className={typeof val !== "number" ? "small" : ''}>{counter}</h1>
            <p>{details.message}</p>
         </div>
      </div>
   )
}
ResultComponent.propTypes = {
   details: PropTypes.object,
   className: PropTypes.string
}
export default ResultComponent
