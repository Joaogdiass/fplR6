export interface PlayerStats {
  player: string;
  victory: number;
  defeat: number;
  
  kills: number;
  assists: number;
  deaths: number;
  roundsWon: number;
  roundsLost: number;
  rankingPoints?: number;
  avatar?: string; // agora avatar opcional também
}



export const players: PlayerStats[] = [
  { player: "DEGE...", victory: 3, defeat: 1, kills: 54, assists: 10, deaths: 36, roundsWon: 24, roundsLost: 23, avatar: "https://ui-avatars.com/api/?name=DEGE...&background=0D8ABC&color=fff" },
  { player: "ElfBar.IceKing", victory: 4, defeat: 0, kills: 36, assists: 16, deaths: 27, roundsWon: 28, roundsLost: 18, avatar: "https://ui-avatars.com/api/?name=ElfBar.IceKing&background=0D8ABC&color=fff" },
  { player: "Fleury..", victory: 2, defeat: 2, kills: 15, assists: 3, deaths: 37, roundsWon: 22, roundsLost: 25, avatar: "https://ui-avatars.com/api/?name=Fleury..&background=0D8ABC&color=fff" },
  { player: "L9ArtTheClown", victory: 3, defeat: 1, kills: 32, assists: 11, deaths: 29, roundsWon: 24, roundsLost: 23, avatar: "https://ui-avatars.com/api/?name=L9ArtTheClown&background=0D8ABC&color=fff" },
  { player: "Lopes..", victory: 3, defeat: 1,  kills: 36, assists: 8, deaths: 32, roundsWon: 27, roundsLost: 20, avatar: "https://ui-avatars.com/api/?name=Lopes..&background=0D8ABC&color=fff" },
  { player: "Mxchine7.", victory: 0, defeat: 4,  kills: 36, assists: 7, deaths: 35, roundsWon: 18, roundsLost: 29, avatar: "https://ui-avatars.com/api/?name=Mxchine7.&background=0D8ABC&color=fff" },
  { player: "Te_Drop17", victory: 0, defeat: 4,  kills: 14, assists: 6, deaths: 38, roundsWon: 18, roundsLost: 29, avatar: "https://ui-avatars.com/api/?name=Te_Drop17&background=0D8ABC&color=fff" },
  { player: "bocao.", victory: 1, defeat: 3,  kills: 34, assists: 9, deaths: 35, roundsWon: 24, roundsLost: 24, avatar: "https://ui-avatars.com/api/?name=bocao.&background=0D8ABC&color=fff" },
  { player: "ryuk.RAIO", victory: 3, defeat: 1,  kills: 47, assists: 16, deaths: 30, roundsWon: 27, roundsLost: 20, avatar: "https://ui-avatars.com/api/?name=ryuk.RAIO&background=0D8ABC&color=fff" },
  { player: "scarey.", victory: 0, defeat: 1,  kills: 5, assists: 1, deaths: 8, roundsWon: 5, roundsLost: 7, avatar: "https://ui-avatars.com/api/?name=scarey.&background=0D8ABC&color=fff" },
  { player: "yFeHx", victory: 1, defeat: 2,  kills: 18, assists: 4, deaths: 22, roundsWon: 18, roundsLost: 17, avatar: "https://ui-avatars.com/api/?name=yFeHx&background=0D8ABC&color=fff" },
];

