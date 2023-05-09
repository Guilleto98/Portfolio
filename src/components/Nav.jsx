import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";



function Navbar() {
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
    <nav className="bg-gray-800 p-4">
      <div className="f-col md:flex items-center justify-between">
        <div className="text-white mb-5 mt-5 md:m-0 text-center font-bold text-lg">
          My Website
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
    </nav>
  );
}

export default Navbar;
