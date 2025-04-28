import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full flex justify-center mb-6"
    >
      <h1 className="text-4xl font-extrabold text-white tracking-wide text-center">
        Player Statistics
      </h1>
    </motion.header>
  );
};

export default Header;
