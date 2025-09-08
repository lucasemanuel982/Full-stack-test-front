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
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-dark-border px-10 py-3"
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
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          User Data Dashboard
        </h2>
      </div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          onClick={onExecute}
          disabled={loading}
          className={`btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="truncate">
            {loading && loadingType === 'executing' ? 'Executing...' : 'Execute'}
          </span>
        </motion.button>
        <motion.button
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          onClick={onClear}
          disabled={loading}
          className={`btn-secondary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="truncate">
            {loading && loadingType === 'clearing' ? 'Clearing...' : 'Clear'}
          </span>
        </motion.button>
      </div>
    </motion.header>
  );
}
