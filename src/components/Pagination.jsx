import { motion } from 'framer-motion';
import { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const pageVariants = {
    hover: { 
      scale: 1.1,
      backgroundColor: "rgba(147, 52, 239, 0.2)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const arrowVariants = {
    hover: { 
      scale: 1.2,
      color: "#9234ef",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  return (
    <motion.div 
      className="flex items-center justify-center p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.a 
        href="#" 
        className="flex size-10 items-center justify-center"
        variants={arrowVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
          </svg>
        </div>
      </motion.a>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <motion.a
          key={page}
          href="#"
          className={`text-sm leading-normal flex size-10 items-center justify-center text-white rounded-full ${
            page === currentPage 
              ? 'font-bold bg-dark-border' 
              : 'font-normal'
          }`}
          variants={pageVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </motion.a>
      ))}
      
      <motion.a 
        href="#" 
        className="flex size-10 items-center justify-center"
        variants={arrowVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
          </svg>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Pagination;
