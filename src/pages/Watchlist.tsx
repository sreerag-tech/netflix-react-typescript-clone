import { useWatchlist } from '../context/WatchlistContext';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-6">My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {watchlist.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded">
              <img src={movie.poster} alt={movie.title} />
              <h2 className="mt-2">{movie.title}</h2>
              <button
                onClick={() => removeFromWatchlist(movie.id)}
                className="mt-2 bg-red-600 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;