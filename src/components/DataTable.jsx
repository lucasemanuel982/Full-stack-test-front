import { motion } from 'framer-motion';

const DataTable = () => {
  const users = [
    { id: 1, name: "Sophia Clark", email: "sophia.clark@email.com", phone: "(555) 123-4567" },
    { id: 2, name: "Ethan Carter", email: "ethan.carter@email.com", phone: "(555) 987-6543" },
    { id: 3, name: "Olivia Bennett", email: "olivia.bennett@email.com", phone: "(555) 246-8013" },
    { id: 4, name: "Liam Foster", email: "liam.foster@email.com", phone: "(555) 369-1470" },
    { id: 5, name: "Ava Harper", email: "ava.harper@email.com", phone: "(555) 789-0123" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="px-4 py-3 @container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex overflow-hidden rounded-xl border border-dark-table-border bg-dark-bg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <table className="flex-1">
          <thead>
            <tr className="bg-dark-table-bg">
              <th className="table-column-id px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                ID
              </th>
              <th className="table-column-name px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                Name
              </th>
              <th className="table-column-email px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                Email
              </th>
              <th className="table-column-phone px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <motion.tr 
                key={user.id}
                className="border-t border-t-dark-table-border"
                variants={rowVariants}
                whileHover={{ 
                  backgroundColor: "rgba(147, 52, 239, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <td className="table-column-id h-[72px] px-4 py-2 w-[400px] text-text-secondary text-sm font-normal leading-normal">
                  {user.id}
                </td>
                <td className="table-column-name h-[72px] px-4 py-2 w-[400px] text-text-secondary text-sm font-normal leading-normal">
                  {user.name}
                </td>
                <td className="table-column-email h-[72px] px-4 py-2 w-[400px] text-text-secondary text-sm font-normal leading-normal">
                  {user.email}
                </td>
                <td className="table-column-phone h-[72px] px-4 py-2 w-[400px] text-text-secondary text-sm font-normal leading-normal">
                  {user.phone}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default DataTable;
