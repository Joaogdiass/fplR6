import { useState } from 'react';
import { PlayerStats } from '../data/players';
import { motion } from 'framer-motion';

interface RankingTableProps {
  players: PlayerStats[];
}

const RankingTable = ({ players }: RankingTableProps) => {
  const [sortColumn, setSortColumn] = useState<
    keyof PlayerStats | 'kd' | 'kda' | 'winRate' | 'saldo' | 'matches' | 'roundsWon' | 'roundsLost' | 'rankingPoints'
  >('rankingPoints');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // 🧠 Função para calcular a pontuação de Assists com diminuição progressiva
  const calculateAssistsPoints = (assists: number) => {
    let points = 0;

    for (let i = 1; i <= assists; i++) {
      if (i <= 5) {
        points += 0.5;
      } else if (i <= 10) {
        points += 0.25;
      } else {
        points += 0.1;
      }
    }

    return points;
  };

  // 🚀 Função principal para calcular Ranking Points
  const calculateRankingPoints = (player: PlayerStats) => {
    const kd = player.deaths === 0 ? player.kills : player.kills / player.deaths;
    const winRate = (player.victory / (player.victory + player.defeat)) * 100;
    const assistsPoints = calculateAssistsPoints(player.assists);

    return (
        (player.kills * 2) +
        (assistsPoints) +
        (player.victory * 5) +
        (kd * 10) +
        (winRate * 0.5) -
        (player.deaths * 2) -
        (player.defeat * 5)
      );
    };

  const getSortedPlayers = () => {
    const playersWithPoints = players.map(player => ({
      ...player,
      rankingPoints: calculateRankingPoints(player)
    }));

    return playersWithPoints.sort((a, b) => {
      const getValue = (player: PlayerStats) => {
        if (sortColumn === 'rankingPoints') return player.rankingPoints ?? 0;
        if (sortColumn === 'kd') return player.deaths === 0 ? player.kills : player.kills / player.deaths;
        if (sortColumn === 'kda') return player.deaths === 0 ? (player.kills + player.assists) : (player.kills + player.assists) / player.deaths;
        if (sortColumn === 'winRate') return (player.victory / (player.victory + player.defeat)) * 100;
        if (sortColumn === 'saldo') return player.roundsWon - player.roundsLost;
        if (sortColumn === 'matches') return player.victory + player.defeat;
        if (sortColumn === 'roundsWon') return player.roundsWon;
        if (sortColumn === 'roundsLost') return player.roundsLost;
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
                  { label: 'Ranking Points', key: 'rankingPoints' },
                  { label: 'Kills', key: 'kills' },
                  { label: 'Assists', key: 'assists' },
                  { label: 'Deaths', key: 'deaths' },
                  { label: 'Victory', key: 'victory' },
                  { label: 'Defeat', key: 'defeat' },
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
                const kd = player.deaths === 0 ? player.kills : player.kills / player.deaths;
                const winRate = (player.victory / (player.victory + player.defeat)) * 100;
                const saldo = player.roundsWon - player.roundsLost;
                const rankingPoints = player.rankingPoints ?? 0;

                return (
                  <tr
                    key={player.player}
                    className="hover:bg-gray-800 transition-all duration-200 text-center text-xs md:text-sm"
                  >
                    <td className="px-2 py-2 md:px-4 font-semibold">{player.player}</td>
                    <td className="px-2 py-2 md:px-4">{rankingPoints.toFixed(2)}</td>
                    <td className="px-2 py-2 md:px-4">{player.kills}</td>
                    <td className="px-2 py-2 md:px-4">{player.assists}</td>
                    <td className="px-2 py-2 md:px-4">{player.deaths}</td>
                    <td className="px-2 py-2 md:px-4">{player.victory}</td>
                    <td className="px-2 py-2 md:px-4">{player.defeat}</td>
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

export default RankingTable;
