export interface PlayerStats {
  player: string;
  victory: number;
  defeat: number;
  score: number;
  kills: number;
  assists: number;
  deaths: number;
  roundsWon: number;
  roundsLost: number;
}

export const players: PlayerStats[] = [
  { player: "DEGE...", victory: 2, defeat: 1, score: 16441, kills: 42, assists: 9, deaths: 26, roundsWon: 17, roundsLost: 18 },
  { player: "ElfBar.IceKing", victory: 3, defeat: 0, score: 16709, kills: 23, assists: 14, deaths: 20, roundsWon: 28, roundsLost: 13 },
  { player: "Fleury..", victory: 1, defeat: 2, score: 9378, kills: 13, assists: 3, deaths: 29, roundsWon: 15, roundsLost: 20 },
  { player: "L9ArtTheClown", victory: 2, defeat: 1, score: 14173, kills: 25, assists: 9, deaths: 22, roundsWon: 17, roundsLost: 18 },
  { player: "Lopes..", victory: 3, defeat: 0, score: 17085, kills: 27, assists: 6, deaths: 24, roundsWon: 28, roundsLost: 13 },
  { player: "Mxchine7.", victory: 0, defeat: 3, score: 8387, kills: 23, assists: 4, deaths: 26, roundsWon: 13, roundsLost: 22 },
  { player: "Te_Drop17", victory: 0, defeat: 3, score: 6990, kills: 11, assists: 5, deaths: 28, roundsWon: 13, roundsLost: 22 },
  { player: "bocao.", victory: 1, defeat: 2, score: 11393, kills: 24, assists: 5, deaths: 26, roundsWon: 19, roundsLost: 17 },
  { player: "ryuk.RAIO", victory: 2, defeat: 1, score: 15796, kills: 35, assists: 12, deaths: 21, roundsWon: 20, roundsLost: 15 },
  { player: "scarey.", victory: 0, defeat: 1, score: 2430, kills: 5, assists: 1, deaths: 8, roundsWon: 5, roundsLost: 7 },
  { player: "yFeHx", victory: 1, defeat: 1, score: 7757, kills: 12, assists: 2, deaths: 12, roundsWon: 13, roundsLost: 10 },
];
