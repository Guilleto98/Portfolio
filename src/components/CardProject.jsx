import React from "react";
import { motion } from "framer-motion";

const CardProject = ({ imageSrc, title, href }) => {
  return (
    <motion.div
      className="max-w-xs my-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      style={{ width: "300px" }}
    >
      <a href={href}>
        <motion.img
          src={imageSrc}
          alt=""
          className="w-full object-cover object-center"
          style={{ width: "300px" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        />
        <div className="px-4 py-2 md:px-10 md:py-6 text-center border">
          <h2 className="uppercase font-bold text-xl mb-2 text-gray-500">
            {title}
          </h2>
        </div>
      </a>
    </motion.div>
  );
};

export default CardProject;
