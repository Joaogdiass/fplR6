 // Corrigido import
import PlayerTable from './components/PlayerTable';
import RankingTable from './components/RankingTable';
import { players } from './data/players';
import { Layout } from './components/Layout'; // Corrigir o caminho

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Página inicial */}
          <Route index element={
            <>
              
              <PlayerTable players={players} />
            </>
          } />

          {/* Página de ranking */}
          <Route path="ranking" element={<RankingTable players={players} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
