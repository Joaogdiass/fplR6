import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header, Navbar, Footer } from './index';



const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <Header />
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-7xl flex-grow"
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
};

export default Layout;
