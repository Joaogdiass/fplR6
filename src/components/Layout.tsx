import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-white mb-6 tracking-wide text-center"
      >
        Player Statistics
      </motion.h1>

      {/* Menu de Navegação */}
      <div className="flex gap-4 mb-8">
        <Link
          to="/"
          className={`px-4 py-2 rounded ${
            location.pathname === '/' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'
          } transition-colors`}
        >
          Estatísticas
        </Link>
        <Link
          to="/ranking"
          className={`px-4 py-2 rounded ${
            location.pathname === '/ranking' ? 'bg-white text-gray-900' : 'bg-gray-800 text-white'
          } transition-colors`}
        >
          Ranking
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-7xl"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default Layout;
