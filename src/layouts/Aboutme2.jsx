import React from "react";

const Aboutme2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
        <div className="w-full h-full md:w-1/2 bg-gray-700 flex flex-col justify-center p-10">
          <div className="div-p p-5 rounded-lg md:p-5">
            <p className="p-Aboutme font-serif leading-relaxed text-3xl text-center md:text-left px-20 py-20">
              Not only am I passionat e about technology, but I also enjoy
              living amazing experiences. High-adrenaline sports are my passion.
              I practice kitesurfing whenever conditions allow, and it's one of
              the greatest passions I have. I strive to strike a balance between
              spending all day programming and engaging in extreme sports.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg">
          <img
            src={me2}
            alt=""
            className="w-full h-full object-cover md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutme2;
