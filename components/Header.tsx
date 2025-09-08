'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  onExecute: () => void;
  onClear: () => void;
  loading?: boolean;
  loadingType?: 'idle' | 'fetching' | 'executing' | 'clearing';
}

export default function Header({ onExecute, onClear, loading = false, loadingType = 'idle' }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-dark-border px-4 md:px-10 py-3"
    >
      <div className="flex items-center gap-4 text-white">
        <motion.div 
          className="size-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
          </svg>
        </motion.div>
        <h2 className="text-white text-sm md:text-lg font-bold leading-tight tracking-[-0.015em]">
          User Data Dashboard
        </h2>
      </div>
      <div className="flex gap-1 md:gap-2">
        <motion.button
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          onClick={onExecute}
          disabled={loading}
          className={`btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center gap-1 md:gap-2">
            <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
            <span className="truncate hidden sm:inline">
              {loading && loadingType === 'executing' ? 'Executing...' : 'Execute'}
            </span>
            <span className="truncate sm:hidden">
              {loading && loadingType === 'executing' ? '...' : '▶'}
            </span>
          </div>
        </motion.button>
        <motion.button
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          onClick={onClear}
          disabled={loading}
          className={`btn-secondary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center gap-1 md:gap-2">
            <svg width="14" height="14" className="md:w-4 md:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 7L18.1327 19.3525C18.0579 20.3215 17.187 21 16.2178 21H7.78225C6.81296 21 5.94208 20.3215 5.86732 19.3525L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="truncate hidden sm:inline">
              {loading && loadingType === 'clearing' ? 'Clearing...' : 'Clear'}
            </span>
            <span className="truncate sm:hidden">
              {loading && loadingType === 'clearing' ? '...' : '🗑'}
            </span>
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
}
