import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="f-col md:flex items-center justify-between">
        <div className="text-white mb-5 mt-5 md:m-0 text-center font-bold text-lg">
          My Website
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a
            className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
            href="/"
          >
            About me
          </a>
          <a
            className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
            href="/about"
          >
            Projects
          </a>
          <a
            className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
            href="/contact"
          >
            Expirence
          </a>
          <a
            className="text-white hover:text-white px-3 hover:bg-gray-400 py-2 rounded-md text-md font-bold"
            href="/contact"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
