import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

import { isMobile } from "react-device-detect";

import "./nav.css";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = () => {
    setShowNav(!showNav);
  };

  function scrollToTop() {
    scroll.scrollToTop();
  }

  function scrollToAboutMe() {
    scroll.scrollTo("#aboutme-section", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <>
      <nav className="bg-gray-800 p-4">
        {isMobile ? (
          <div className="flex justify-center">
            <button onClick={handleNavClick}>
              <RxHamburgerMenu className="text-2xl text-white" />
            </button>
          </div>
        ) : (
          <div className="f-col md:flex items-center justify-between">
            <div className="text-white mb-5 mt-5 md:m-0 text-center font-bold text-lg">
              <button>G.TORRES</button>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <Link
                className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
                to="aboutme-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                About me
              </Link>
              <Link
                className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
                href="/about"
                to="project-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
                href="/contact"
                to="contact-section"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
        {showNav && (
          <div className="flex flex-col md:hidden items-center">
            <Link
              className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
              to="aboutme-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              About me
            </Link>
            <Link
              className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
              href="/about"
              to="project-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
              href="/contact"
              to="contact-section"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
