import { PlayerStats } from '@data/players';
import { motion } from 'framer-motion';

interface PodiumProps {
  players: PlayerStats[];
}

const Podium = ({ players }: PodiumProps) => {
  // Ordenando os jogadores pelo rankingPoints e pegando os 3 primeiros
  const podiumPlayers = [...players]
    .filter((p) => p.rankingPoints !== undefined)
    .sort((a, b) => (b.rankingPoints ?? 0) - (a.rankingPoints ?? 0))
    .slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center items-end gap-8 my-10"
    >
      {podiumPlayers.map((player, index) => {
        let height = 'h-24 w-24'; // Tamanho normal
        if (index === 0) height = 'h-32 w-32'; // Top 1 maior

        let placeColor = '';
        if (index === 0) placeColor = 'text-yellow-400'; // Ouro
        else if (index === 1) placeColor = 'text-gray-300'; // Prata
        else if (index === 2) placeColor = 'text-orange-400'; // Bronze

        return (
          <div key={player.player} className="flex flex-col items-center">
            <div className={`rounded-full bg-gray-700 overflow-hidden ${height}`}>
              <img
                src={player.avatar ?? '/default-avatar.png'}
                alt={player.player}
                className="object-cover w-full h-full"
              />
            </div>
            <span className={`mt-2 font-bold ${placeColor}`}>
              {index + 1}º {player.player}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Podium;
