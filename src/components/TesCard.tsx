import { motion } from "framer-motion";
import Image from "next/image";
interface CardProps {
  name: string;
  designation: string;
  review: string;
  image: string;
}

const TesCard: React.FC<CardProps> = ({ name, designation, review,image }) => {
  return (
    <motion.div
      className="w-[250px] sm:w-[350px] lg:w-[450px] p-6 bg-black rounded-lg shadow-lg flex flex-col text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    ><div className="flex justify-between">
      <div> <h3 className="text-xl font-bold mb-2">{name}</h3>
    <h4 className="text-gray-400 mb-4">{designation}</h4></div>
     
    <Image
    className="rounded-full"
        src={image}
        alt="Picture of the author"
        width={60}
        height={60}/></div>
      
      <p className="text-gray-300">{review}</p>
      
    </motion.div>
  );
};

export default TesCard;
