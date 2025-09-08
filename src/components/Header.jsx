import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-dark-border px-10 py-3"
    >
      <div className="flex items-center gap-4 text-white">
        <motion.div 
          className="size-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
          </svg>
        </motion.div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          User Data Dashboard
        </h2>
      </div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-purple-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Execute</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-dark-border text-white text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Clear</span>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
