import "./footerListComp.css"
import PropTypes from "prop-types"
const FooterListComp = ({ header, list }) => {
   return (
      <div className="footerListCompDiv">
         <h3>{header}</h3>
         <ul>
            {list.map((el, index) => {
               let data
               switch (header) {
                  case "Our Service":
                     data = (
                        <p>{el}</p>
                     )
                     break;
                  case "Useful Links":
                     data = (
                        <a href="">{el}</a>
                     )
                     break;
                  default:
                     data = null
               }
               return <li key={index}>
                  {data}
               </li>
            })}
         </ul>
      </div>
   )
}
FooterListComp.propTypes = {
   header: PropTypes.string,
   list: PropTypes.array
}
export default FooterListComp
