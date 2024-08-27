
import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
// lAZY load components
const Header = lazy(() => import("./header/header.jsx"))
const HomePage = lazy(() => import("./HomePage.jsx"))
const Footer = lazy(() => import("./footer/footer.jsx"))
const Teampage = lazy(() => import("./Teampage.jsx"))
function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      console.log(scrollPosition)
      if (scrollPosition > 100) {
        setScrolled(true);
      }
      else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled])
  const scrollToSection = () => {
    const section = document.getElementById('hero')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
      <Suspense fallback={<div className='fallback'>  Loading...</div>}>
        <div className="app">
          <Header scroll={scrolled} />
          <Routes>
            <Route path="/" element={<HomePage scroll={scrolled} style={{ flex: "1" }} />} />
            <Route path="/team" element={<Teampage />} />
          </Routes>
          <Footer />
          <div onClick={scrollToSection} className={`upBtn ${scrolled === true ? "visible" : ""}`}>
            <p>&uarr;</p>
          </div>
          <div className={`whatsappBtn ${scrolled === true ? "visible" : ""}`}>
            <a href="https://wa.me/+2348162623184?text=Hello%20there!" target="_blank">
              <img src="/images/watsapBtn.png" alt="" />
            </a>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default App
