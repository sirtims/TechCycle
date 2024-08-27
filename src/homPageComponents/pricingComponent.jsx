import './component.css'
import PropTypes from "prop-types"
const PricingComponents = ({ info, details, className }) => {


   return (

      <section className='price_item'>
         <div className="category">
            <div className={`category_name ${className.titleBg}`}>{details.title}</div>
            <div className="category_price">{details.price}</div>
         </div>
         <ul className="category_list">
            {info.map(el => (
               <li key={el.id}>
                  <div className={`buletten_wrapper ${className.btnBg}`}>
                     <img src="/images/bulletin.svg" alt="" />
                  </div>
                  <p>{el.info}</p>
               </li>
            ))}
         </ul>
         <div className="category_btn">
            <a href='#' className={`btn ${className.btnBg}`}>ORDER NOW</a>
         </div>
      </section>
   )
}
PricingComponents.propTypes = {
   info: PropTypes.array,
   details: PropTypes.object,
   className: PropTypes.object
}
export default PricingComponents
