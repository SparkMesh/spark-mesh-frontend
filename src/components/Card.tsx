import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  const cardVariants = {
    hover: {  y: -5, },
    
  };

  const iconVariants = {
    hover: { scale: 1.05 },
  };

  const textVariants = {
    hover: { color: "#FFFFFF" },
  };

  return (
    <motion.div
      className="bg-gradient-to-l  from-gray-600 to-gray-900   rounded-lg shadow-md shadow-black mt-[2vh] px-3 py-4 text-center w-[300px] sm:w-[250px] lg:w-[300px]"
      whileHover="hover"
     
      variants={cardVariants}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-[8vh] h-[8vh] bg-gray-900 p-2  rounded-lg mx-auto flex items-center justify-center mb-4"
        variants={iconVariants}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <motion.h2
        className="text-xl font-bold text-white mb-2"
        variants={textVariants}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-300 font-thin text-lg"
        variants={textVariants}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Card;
