import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { BoltIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  name: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  liveLink?: string;
projectIndex?:number;
index?:number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  shortDescription,
  description,
  thumbnail,
  liveLink,
projectIndex,
index
 
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const [preview, setPreview] = React.useState(false);

  return (
    <motion.div
    
      className={`bg-gray-50   p-6 cursor-pointer  ${projectIndex == index ? "bg-gray-200 " : 'sm:hover:bg-gray-200  '}  rounded-lg shadow-md`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      
    >
      <motion.div variants={cardVariants} initial="hidden" animate="visible">
        <div className="flex mb-4 items-center">
          <div className="flex-shrink-0 hover:scale-105 transition mr-4">
            <Image
              src={thumbnail}
              width={300}
              height={200}
              alt={name}
              className="w-16 h-16 rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold sm:flex sm:items-center sm:justify-between">
             <p>
              {name}</p>
             
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-yellow-600 border-2 border-white hover:scale-105  mt-1 rounded-lg flex justify-center items-center px-2 py-1  transition duration-300 animate-gradient"
                >
                  <BoltIcon className="h-5 w-5" />
                  <text className="ml-2">Live</text>
                </motion.a>
            
            </h2>
            <p className="text-gray-600">{shortDescription}</p>
          </div>
        </div>
      </motion.div>
      <motion.div variants={textVariants} initial="hidden" animate="visible">
        <p className="text-gray-800">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
