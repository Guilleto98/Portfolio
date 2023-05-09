import React from "react";
import me from "/img/Me.jpg";
import me2 from "/img/me2.jpeg";
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center">
          <img
            src={me}
            alt=""
            className="w-full h-full object-cover md:h-full md:w-auto"
          />
        </div>
        <div className="w-full h-full md:w-1/2 bg-gray-700 flex flex-col justify-center">
        <div className="div-p m-10 p-5 rounded-lg  md:m-0 md:p-10 md:rounded-none">
            <p className="p-Aboutme text-sm md:text-lg lg:text-2xl font-serif text-center md:text-left">
              I am a dedicated front-end developer with experience in React. I
              am passionate about creating beautiful and functional web
              applications.
              <br />
              <br />
              I graduated from Hack Academy's Coding Bootcamp, where I invested
              over 600 hours learning the most prominent programming languages.
              During my education, I discovered my enthusiasm for programming
              and have since been focused on Front-end development with
              React.js.
              <br />
              <br />
              As a professional, I am committed to delivering high-quality work,
              and I have developed strong technical skills. I am also a team
              player who collaborates well with colleagues and other departments
              to achieve common objectives.
              <br />
              <br />I am always looking to improve my skills and stay up-to-date
              with the latest industry trends, and I am open to new challenges
              that can help me grow as a professional.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center h-screen w-full">
        <div className="w-full h-full  md:w-1/2 bg-gray-700 flex items-center justify-center">
          <div className="div-p m-10 p-5 rounded-lg">
            <p className="p-Aboutme font-serif leading-relaxed text-3xl text-center md:text-left px-20 py-20">
              Not only am I passionat e about technology, but I also enjoy living
              amazing experiences. High-adrenaline sports are my passion. I
              practice kitesurfing whenever conditions allow, and it's one of
              the greatest passions I have. I strive to strike a balance between
              spending all day programming and engaging in extreme sports.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-screen bg-cover bg-center">
          <img src={me2} alt="" className="w-full h-full object-cover" />
        </div>
      </div> 
      
      
      */}
    </>
  );
};

export default Aboutme;
