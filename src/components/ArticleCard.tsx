import { motion } from 'framer-motion';

interface ArticleCardProps {
  title: string;
  thumbnail: string;
  shortDescription: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, thumbnail, shortDescription, description }) => {
  return (
    <motion.div
      initial={{  opacity:0,y: 50, }}
      animate={{ opacity:1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" h-full bg-gray-900 text-white m-1 p-2.5 rounded-lg shadow-md  focus:bg-gray-700  cursor-pointer"
    >
      <img src={thumbnail} alt={title} className="w-full object-cover mb-4 rounded-md" />
      <h3 className="text-lg font-semibold  truncate">{title}</h3>
      <p className=" text-gray-200 truncate ">{shortDescription}</p>
      <p className="text-sm text-gray-400 truncate">{description}</p>
    </motion.div>
  );
};

export default ArticleCard;
