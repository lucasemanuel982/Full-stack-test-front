'use client';

import { motion } from 'framer-motion';
import { ApiUser } from '@/services/api';

interface DataTableProps {
  users: ApiUser[];
  loading?: boolean;
  loadingType?: 'idle' | 'fetching' | 'executing' | 'clearing';
}

export default function DataTable({ users, loading = false, loadingType = 'idle' }: DataTableProps) {
  // Garantir que users seja sempre um array
  const safeUsers = Array.isArray(users) ? users : [];
  
  
  const columns = [
    { key: 'id' as keyof ApiUser, label: 'ID', width: 'w-[80px]', className: 'table-column-id' },
    { key: 'nome' as keyof ApiUser, label: 'Nome', width: 'w-[200px]', className: 'table-column-name' },
    { key: 'email' as keyof ApiUser, label: 'Email', width: 'w-[250px]', className: 'table-column-email' },
    { key: 'phone' as keyof ApiUser, label: 'Phone', width: 'w-[150px]', className: 'table-column-phone' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="px-4 py-3 @container"
    >
      <div className="table-responsive">
        <table className="w-full table-fixed">
          <thead>
            <tr className="table-header">
              {columns.map((column, index) => (
                <motion.th
                  key={column.key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className={`${column.className} px-4 py-3 text-left text-white ${column.width} text-sm font-medium leading-normal`}
                >
                  {column.label}
                </motion.th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="h-[72px] px-4 py-2 text-center text-text-secondary text-sm">
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-purple"></div>
                    <span className="ml-2">
                      {loadingType === 'fetching' ? 'Loading data...' : 
                       loadingType === 'executing' ? 'Executing...' : 
                       loadingType === 'clearing' ? 'Clearing data...' : 
                       'Loading...'}
                    </span>
                  </div>
                </td>
              </tr>
            ) : safeUsers.length === 0 ? (
              <tr>
                <td colSpan={4} className="h-[72px] px-4 py-2 text-center text-text-secondary text-sm">
                  Nenhum dado encontrado
                </td>
              </tr>
            ) : (
              safeUsers.map((user, userIndex) => (
                <motion.tr
                  key={`user-${userIndex}-${user.nome}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + userIndex * 0.1 }}
                  className="border-t border-dark-table-border"
                >
                  {columns.map((column, colIndex) => (
                    <motion.td
                      key={`user-${userIndex}-${column.key}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.7 + userIndex * 0.1 + colIndex * 0.05 }}
                      className={`${column.className} h-[72px] px-4 py-2 ${column.width} text-text-secondary text-sm font-normal leading-normal`}
                    >
                      {user[column.key]}
                    </motion.td>
                  ))}
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
