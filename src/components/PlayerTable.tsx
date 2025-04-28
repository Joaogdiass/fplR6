import { useState } from 'react';
import { PlayerStats } from '../data/players';
import { motion } from 'framer-motion';

interface PlayerTableProps {
  players: PlayerStats[];
}

const PlayerTable = ({ players }: PlayerTableProps) => {
  const [sortColumn, setSortColumn] = useState<
    keyof PlayerStats | 'kd' | 'kda' | 'winRate' | 'saldo' | 'matches' | 'roundsWon' | 'roundsLost'
  >('kills');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSort = (column: keyof PlayerStats | 'kd' | 'kda' | 'winRate' | 'saldo' | 'matches' | 'roundsWon' | 'roundsLost') => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
    }
  };

  const getSortedPlayers = () => {
    return [...players].sort((a, b) => {
      const getValue = (player: PlayerStats) => {
        if (sortColumn === 'kd') return player.deaths === 0 ? player.kills : player.kills / player.deaths;
        if (sortColumn === 'kda') return player.deaths === 0 ? (player.kills + player.assists) : (player.kills + player.assists) / player.deaths;
        if (sortColumn === 'winRate') return (player.victory / (player.victory + player.defeat)) * 100;
        if (sortColumn === 'saldo') return (player.victory * 4) - (player.defeat * 4);
        if (sortColumn === 'matches') return player.victory + player.defeat;
        if (sortColumn === 'roundsWon') return player.victory * 4;
        if (sortColumn === 'roundsLost') return player.defeat * 4;
        return player[sortColumn];
      };

      const valueA = getValue(a);
      const valueB = getValue(b);

      if (sortDirection === 'asc') {
        return Number(valueA) - Number(valueB);
      } else {
        return Number(valueB) - Number(valueA);
      }
    });
  };

  const sortedPlayers = getSortedPlayers();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center p-4"
    >
      <div className="w-full max-w-7xl overflow-x-auto">
        <div className="min-w-[1300px] shadow-lg rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full table-auto border-collapse text-gray-200">
            <thead className="bg-gray-800 sticky top-0 text-xs md:text-sm">
              <tr>
                {[
                  { label: 'Player', key: 'player' },
                  { label: 'Matches', key: 'matches' },
                  { label: 'Victory', key: 'victory' },
                  { label: 'Defeat', key: 'defeat' },
                  { label: 'Score', key: 'score' },
                  { label: 'Kills', key: 'kills' },
                  { label: 'Assists', key: 'assists' },
                  { label: 'Deaths', key: 'deaths' },
                  { label: 'K/D', key: 'kd' },
                  { label: 'KDA', key: 'kda' },
                  { label: 'Win Rate (%)', key: 'winRate' },
                  { label: 'Rounds Won', key: 'roundsWon' },
                  { label: 'Rounds Lost', key: 'roundsLost' },
                  { label: 'Saldo de Rounds', key: 'saldo' },
                ].map(({ label, key }) => (
                  <th
                    key={key}
                    className="px-4 py-3 font-bold text-gray-300 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                    onClick={() => handleSort(key as any)}
                  >
                    {label} {sortColumn === key ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-gray-900 divide-y divide-gray-700">
  {sortedPlayers.map((player) => {
    const kd = player.deaths === 0 ? player.kills : (player.kills / player.deaths);
    const kda = player.deaths === 0 ? (player.kills + player.assists) : (player.kills + player.assists) / player.deaths;
    const winRate = (player.victory / (player.victory + player.defeat)) * 100;
    const saldo = player.roundsWon - player.roundsLost;
    const matches = player.victory + player.defeat;

    return (
      <tr
        key={player.player}
        className="hover:bg-gray-800 transition-all duration-200 text-center text-xs md:text-sm"
      >
        <td className="px-2 py-2 md:px-4 font-semibold">{player.player}</td>
        <td className="px-2 py-2 md:px-4">{matches}</td>
        <td className="px-2 py-2 md:px-4">{player.victory}</td>
        <td className="px-2 py-2 md:px-4">{player.defeat}</td>
        <td className="px-2 py-2 md:px-4">{player.score.toLocaleString('en-US')}</td>
        <td className="px-2 py-2 md:px-4">{player.kills}</td>
        <td className="px-2 py-2 md:px-4">{player.assists}</td>
        <td className="px-2 py-2 md:px-4">{player.deaths}</td>
        <td className="px-2 py-2 md:px-4">{kd.toFixed(2)}</td>
        <td className="px-2 py-2 md:px-4">{kda.toFixed(2)}</td>
        <td className="px-2 py-2 md:px-4">{winRate.toFixed(2)}%</td>
        <td className="px-2 py-2 md:px-4">{player.roundsWon}</td>
        <td className="px-2 py-2 md:px-4">{player.roundsLost}</td>
        <td className="px-2 py-2 md:px-4">{saldo}</td>
      </tr>
    );
  })}
</tbody>

          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerTable;
