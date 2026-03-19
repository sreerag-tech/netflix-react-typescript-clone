import { useWatchlist } from "../context/WatchlistContext";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster: string;
    trailer: string;
}

interface Props {
    movie: Movie;
    onClose: () => void;
}

const MovieModal = ({ movie, onClose }: Props) => {
    const { addToWatchlist } = useWatchlist();

    return (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
            <div className="bg-[#141414] w-full max-w-3xl p-6 rounded-lg relative">

                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-white text-xl"
                >
                    ✕
                </button>

                {movie.trailer ? (
                    <iframe
                        className="w-full h-64 rounded"
                        src={movie.trailer}
                        title="Trailer"
                        allowFullScreen
                    />
                ) : (
                    <p className="text-white text-center">Trailer not available</p>
                )}


                <h2 className="text-2xl text-white mt-4">{movie.title}</h2>

                <p className="text-gray-300 mt-2">{movie.overview}</p>

                <button
                    onClick={() => addToWatchlist(movie)}
                    className="mt-4 bg-red-600 px-4 py-2 rounded"
                >
                    + Add to Watchlist
                </button>
            </div>
        </div>
    );
};

export default MovieModal;