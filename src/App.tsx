import PlayerTable from './components/PlayerTable';
import { players } from './data/players';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-white mb-8 tracking-wide"
      >
        Player Statistics
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-7xl"
      >
        <PlayerTable players={players} />
      </motion.div>
    </div>
  );
}

export default App;
