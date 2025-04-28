import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerTable from './components/PlayerTable';
import RankingTable from './components/RankingTable';
import { players } from './data/players';
import Layout from './components/Layout.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PlayerTable players={players} />} />
          <Route path="ranking" element={<RankingTable players={players} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
