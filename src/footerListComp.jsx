import "./footerListComp.css"
import PropTypes from "prop-types"
const FooterListComp = ({ header, list }) => {
   return (
      <div className="footerListCompDiv">
         <h3>{header}</h3>
         <ul>
            {list.map((el, index) => (
               <li key={index}>
                  <p> &rarr;</p>
                  <p>{el}</p>
               </li>
            ))}
         </ul>
      </div>
   )
}
FooterListComp.propTypes = {
   header: PropTypes.string,
   list: PropTypes.array
}
export default FooterListComp
