import React, { useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import TesCard from "./TesCard";

interface CarouselProps {
  currentPage: number;
  setPage: (newPage: number, newDirection: number) => void;
  direction: number;
}

const xOffset = 4;

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0
  })
};

let pages:any = [];
pages.push({ name: "John Doe", designation:"CEO", reviews: "SparkMesh has truly transformed our business operations. Their software is a game-changer!" , image:'/images/testimonial-1.jpg'})
pages.push({ name: "Jane Smith", designation: "CTO", reviews: "I'm impressed with SparkMesh's innovative solutions. They have exceeded our expectations.", image:'/images/testimonial-1.jpg' })
pages.push({ name: "David Johnson", designation: "Marketing Manager", reviews: "The team at SparkMesh is highly professional and responsive. Their software has made our work much easier." , image:'/images/testimonial-1.jpg'})
pages.push({ name: "Emily Davis", designation: "Software Engineer", reviews: "Using SparkMesh has improved our productivity significantly. I highly recommend their services.", image:'/images/testimonial-1.jpg' })
pages.push({ name: "Michael Wilson", designation: "Product Manager", reviews: "SparkMesh's software has helped us streamline our processes and achieve better results. Thank you!", image:'/images/testimonial-1.jpg' })

const Carousel: React.FC<CarouselProps> = ({ currentPage, setPage, direction }) => {
  const hasPaginated = useRef(false);

  const detectPaginationGesture = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ): void => {
    if (hasPaginated.current) return;
    let newPage = currentPage;
    const threshold = xOffset / 2;

    if (info.offset.x < -threshold) {
      newPage = currentPage + 1;
    } else if (info.offset.x > threshold) {
      newPage = currentPage - 1;
    }

    if (newPage !== currentPage) {
      hasPaginated.current = true;
      //newPage = wrap(0, pages.length, newPage);
      setPage(newPage, info.offset.x < 0 ? 1 : -1);
    }
  };

  return (
    <div className="slider-container">
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentPage}
          className="slide"
          data-page={currentPage}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          custom={direction}
        >
<TesCard name={pages[currentPage].name} designation={pages[currentPage].designation} review={pages[currentPage].reviews} image={pages[currentPage].image} />
            </motion.div>
        
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
