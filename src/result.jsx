import ResultComponent from "./resultComponents/resultComponenet.jsx"
import "./result.css"
const Result = () => {
   const happy = {
      url: "/images/smile.png",
      value: 500,
      message: "Happy Clients"
   }
   const projects = {
      url: "/images/folder.png",
      value: 50,
      message: "Completed Projects"
   }
   const date = {
      url: "/images/person.png",
      value: "24/7",
      message: "Always Available Everyday"
   }
   const cert = {
      url: "/images/people.png",
      value: 20,
      message: "Always Available Everyday"
   }
   const moveDown = "down"
   return (
      <section className="result_section">
         <div className="result_wrapper">
            <ResultComponent details={happy} />
            <ResultComponent className={moveDown} details={projects} />
            <ResultComponent details={date} />
            <ResultComponent className={moveDown} details={cert} />
         </div>
      </section>
   )
}

export default Result
