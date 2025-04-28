import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
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
  );
};

export default Navbar;
