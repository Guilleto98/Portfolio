import React from "react";
import me2 from "/img/me2.jpeg";

const Aboutme2 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center h-auto w-full">
      <div className="w-full md:w-1/2 h-1/2 md:h-screen ">
        <img
          src={me2}
          alt=""
          className="w-full h-full object-cover md:h-full"
        />
      </div>
      <div className="w-full h-full md:w-1/2 md:h-screen bg-gray-700 flex flex-col justify-center p-10">
        <div className="div-p p-5 rounded-lg md:p-10">
          <p className="p-Aboutme text-lg lg:text-3xl font-serif text-center md:text-left">
            Not only am I passionate about technology, but I also enjoy living
            amazing experiences. High-adrenaline sports are my passion.
            <br />
            <br />I practice kitesurfing whenever conditions allow, and it's one
            of the greatest passions I have. I strive to strike a balance
            between spending all day programming and engaging in extreme sports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme2;
