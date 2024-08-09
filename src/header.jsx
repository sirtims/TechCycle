import './header.css'
import { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'



const Header = ({ scroll }) => {
   const [toggle, setToggle] = useState(false)
   const [switchLink, setSwitchLink] = useState(true)
   const handleToggle = () => {
      setToggle(!toggle)
   }
   const handleSwich = () => {
      setSwitchLink(!switchLink)
   }
   const handleScrollToView = (e) => {
      setToggle(false)
      const value = parseInt(e.currentTarget.getAttribute('data-value'), 10)
      let sectionId
      switch (value) {
         case 1:
            sectionId = 'services'
            break;
         case 2:
            sectionId = 'portfolio'
            break;
         case 3:
            sectionId = 'contact';
            break;
         case 4:
            sectionId = 'pricing';
            break;
         default:
            sectionId = null
      }
      if (sectionId) {
         const section = document.getElementById(sectionId);
         section.scrollIntoView({ behavior: 'smooth' })
      }
   }
   return (
      <header className={scroll === true ? "transparent" : ""}>
         <div className="header-inner-container">
            {/* Logo image starts here */}
            <div className="logo">
               <img src="/images/logo.png" alt="" />
            </div>
            {/* Logo image end */}
            {/* nav links  starts here */}
            <div className="nav-links">
               <ul className="links-one">
                  <Link className='link' to="/">
                     <li onClick={handleSwich} className={switchLink === true ? 'switch' : ''}>Home</li>
                  </Link>
                  <li data-value={1} onClick={handleScrollToView}>Services</li>
                  <li data-value={2} onClick={handleScrollToView}>Portfolio</li>
                  <Link className='link' to="/team">
                     <li onClick={handleSwich} className={switchLink === false ? 'switch' : ''} >Team</li>
                  </Link>
                  <li data-value={3} onClick={handleScrollToView}>Contact</li>
                  <li data-value={4} onClick={handleScrollToView}>Pricing</li>
               </ul>
               {/* menu bar starts here */}
               <div className="menu">
                  <img onClick={handleToggle} src="/images/Burger.png" alt="" />
               </div>
               {/* menu bar end  */}
            </div>
            {/* menu-links starts here */}
            <div style={{ ariahidden: true }} className={`menu-links ${toggle === true ? "active" : ""} `}>
               <div className="menu-nav-inner-container">
                  <img onClick={() => setToggle(false)} src="/images/X.png" alt="" />
                  <ul className="links-two">
                     <Link className='link' to="/">
                        <li onClick={() => setToggle(false)} className={switchLink === true ? 'switch' : ''}>Home</li>
                     </Link>
                     <li data-value={1} onClick={handleScrollToView}>Services</li>
                     <li data-value={2} onClick={handleScrollToView}>Portfolio</li>
                     <Link className='link' to="/team">
                        <li onClick={() => setToggle(false)} className={switchLink === false ? 'switch' : ''} >Team</li>
                     </Link>
                     <li data-value={3} onClick={handleScrollToView}>Contact</li>
                     <li data-value={4} onClick={handleScrollToView}>Pricing</li>
                  </ul>
               </div>
            </div>
            {/* menu-links end*/}
            {/* nav links end */}
         </div>
      </header>
   )
}

Header.propTypes = {
   scroll: PropTypes.bool
}
export default Header
