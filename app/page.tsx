'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import DataTable from '@/components/DataTable';
import Pagination from '@/components/Pagination';
import Toast from '@/components/Toast';
import { useApiData } from '@/hooks/useApiData';

export default function Home() {
  const { users, loading, loadingType, error, notification, notificationType, execute, clear } = useApiData();
  const [currentPage, setCurrentPage] = useState(1);

  const handleExecute = async () => {
    await execute();
  };

  const handleClear = async () => {
    await clear();
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="layout-container flex h-full grow flex-col"
    >
      <Header onExecute={handleExecute} onClear={handleClear} loading={loading} loadingType={loadingType} />
      
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-10 mt-4 p-4 bg-red-900/20 border border-red-500/50 rounded-xl"
        >
          <p className="text-red-400 text-sm">
            <strong>Erro:</strong> {error}
          </p>
        </motion.div>
      )}
      
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-40 flex flex-1 justify-center py-5"
      >
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <DataTable users={users} loading={loading} loadingType={loadingType} />
          
          {users.length > 0 && !loading && (
            <Pagination 
              currentPage={currentPage}
              totalPages={Math.ceil(users.length / 5)} // 5 usuários por página
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </motion.div>
      
      <Toast 
        message={notification} 
        type={notificationType} 
        onClose={() => {}} 
      />
    </motion.div>
  );
}
