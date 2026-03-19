import { useEffect, useState } from "react";
import { tmdbFetch } from "../api/tmdb";
import type { Movie } from "../components/movie";
import { MovieCard } from "./MovieCard";
import MovieModal from "./MovieModal";

type MovieListProps = {
    title: string;
    endpoint: string;
};

const MovieList = ({ title, endpoint }: MovieListProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<any | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await tmdbFetch(endpoint);
            setMovies(data.results);
        };
        fetchMovies();
    }, [endpoint]);

    const handleMovieClick = async (movie: any) => {
       
        const videoData = await tmdbFetch(`/movie/${movie.id}/videos`);
        const trailer = videoData.results.find(
            (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        const trailerUrl = trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : "";

        setSelectedMovie({
            id: movie.id,
            title: movie.title || movie.name,
            overview: movie.overview,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            trailer: trailerUrl,
        });
    };

    return (
        <>
            <section className="px-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">{title}</h2>

                <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onClick={handleMovieClick}
                        />
                    ))}

                </div>
            </section>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </>
    );
};

export default MovieList;