import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";



import React from "react";

import { LayoutGroup } from "framer-motion";
import Carousel from "../components/Carousel";
import TransitionEffect from "@/components/TransitionEffect";
//import "./styles.css";

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setPage }) => {
  return (
    <LayoutGroup>
      <div className="flex justify-center items-center ">
        {pages.map((page) => (
          <Indicator
            key={page}
            onClick={() => setPage(page)}
            isSelected={page === currentPage}
          />
        ))}
      </div>
    </LayoutGroup>
  );
};
const pages = [0, 1, 2, 3, 4];

interface IndicatorProps {
  isSelected: boolean;
  onClick: () => void;
}

const Indicator: React.FC<IndicatorProps> = ({ isSelected, onClick }) => {
  return (
    <div className="Indicator-container" onClick={onClick}>
      <div className="Indicator">
        {isSelected && (
          <motion.div className="Indicator-highlight" layoutId="highlight" />
        )}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  if(currentPage === 5){
    setCurrentPage([0, 0]);
} else if(currentPage === -1){
    setCurrentPage([4, 0]);}

  function setPage(newPage: number, newDirection?: number): void {
    if (!newDirection) newDirection = newPage - currentPage;
    setCurrentPage([newPage, newDirection]);
  }

  return (
    <div className="relative h-screen w-screen">
      <TransitionEffect />
      <div className="absolute left-[26%] top-[40%]"><Carousel
      currentPage={currentPage}
      direction={direction}
      setPage={setPage}
    /></div>
    <div className="absolute left-[40%] bottom-0"><Pagination currentPage={currentPage}
                setPage={setPage} /></div>
    
  </div>
      
  );
};

export default Testimonials;
