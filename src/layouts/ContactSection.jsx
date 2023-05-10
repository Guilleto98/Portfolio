import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function ContactSection() {
  return (
    <section
      className="h-screen w-full bg-gray-100 flex flex-col md:flex-row"
      name="contact-section"
    >
      <div className="md:w-1/2 bg-gray-100 text-gray-700 flex items-center justify-center">
        <p className="text-4xl p-12 font-serif leading-relaxed uppercase text-center font-bold">
          Darle oportunidades a alguien es como regalarle una llave a un genio,
          nunca sabes qué puertas abrirá ni qué maravillas creará.
        </p>
      </div>
      <div className="md:w-1/2 bg-gray-100 border-t-2 flex flex-col justify-center px-20 md:p-10 lg:p-32 md:border-l-2 border-gray-700">
        <div className="text-start m-5">
          <h2 className="text-4xl font-serif font-bold">PHONE</h2>
          <p className="text-gray-800 text-xl mt-2">+598 99155644</p>
        </div>
        <div className="text-star m-5">
          <h2 className="text-4xl font-serif font-bold">EMAIL</h2>
          <p className="text-gray-800 text-xl mt-2">guillermo98td@gmail.com</p>
        </div>
        <div className="text-star m-5">
          <h2 className="text-4xl font-serif font-bold">SOCIAL</h2>
          <div className="flex justify-start  mt-2">
            <a
              href="https://www.linkedin.com/in/guillermo-torres-831b2b223/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaLinkedin className="fab fa-instagram text-gray-800 text-3xl hover:text-gray-700" />
            </a>
            <a
              href="https://instagram.com/tr.guille?igshid=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <FaInstagram className="fab fa-instagram text-gray-800 text-3xl hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
