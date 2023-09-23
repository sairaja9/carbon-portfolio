import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Blog from '../pages/Blog';
import FAQs from '../pages/FAQs';
import Contact from '../pages/Contact';
import ETFs from '../pages/ETFs';

export default function Navbar(props) {
  const [activeMenu, setActiveMenu] = React.useState(false);
  let firstSpanClass;
  let secondSpanClass;
  if (activeMenu) {
    firstSpanClass = "filled-span first-active";
    secondSpanClass = "filled-span second-active";
  }
  else {
    firstSpanClass = "filled-span";
    secondSpanClass = "filled-span";
  }
  return (
    <Router>
      <nav id="navbar">
        <Link to="/" id="logo" onClick={() => window.scrollTo(0, 0)}><p id="logo-text">CPM</p></Link>
        <div id="menu-button" onClick={() => setActiveMenu(!activeMenu)}>
          <span className={firstSpanClass}></span>
          <span className="blank-span"></span>
          <span className={secondSpanClass}></span>
        </div>
        <div id="menu">
          {activeMenu ?
            <div id="menu-item-container" onClick={() => setActiveMenu(!activeMenu)}>
              <HashLink to="/" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Home  →</HashLink>
              <HashLink to="/portfolio" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Build a Custom Carbon Portfolio  →</HashLink>
              <HashLink to="/etfs" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Invest in our ETFs  →</HashLink>
              <HashLink to="/blog" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Explore our Blog  →</HashLink>
              <HashLink to="/about" className="menu-item" onClick={() => window.scrollTo(0, 0)}>About Us  →</HashLink>
              <HashLink to="/faqs" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Frequently Asked Questions  →</HashLink>
              <HashLink to="/contact" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Contact Us  →</HashLink>
            </div>
            : null}
        </div>
      </nav>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/etfs" element={<ETFs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}