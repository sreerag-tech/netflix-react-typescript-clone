import { useEffect, useState } from "react";
import { tmdbFetch } from "../api/tmdb";
import type { Movie } from "./movie";
import TrailerModal from "./TrailerModal";

const BrowseHero = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await tmdbFetch("/trending/movie/week");
            const random =
                data.results[Math.floor(Math.random() * data.results.length)];
            setMovie(random);
        };
        fetchMovie();
    }, []);

    const handlePlay = async () => {
        if (!movie) return;

        const data = await tmdbFetch(`/movie/${movie.id}/videos`);
        const trailer = data.results.find(
            (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        if (trailer) {
            setTrailerKey(trailer.key);
        } else {
            alert("Trailer not available");
        }
    };

    if (!movie) return null;

    return (
        <>
            <section className="relative h-[80vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                <div className="relative z-10 px-6 pt-40 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        {movie.title || movie.name}
                    </h1>

                    <p className="text-gray-200 max-w-xl mb-6 line-clamp-3">
                        {movie.overview}
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={handlePlay}
                            className="bg-white text-black px-6 py-2 rounded font-semibold"
                        >
                            ▶ Play
                        </button>

                        <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-semibold">
                            More Info
                        </button>
                    </div>
                </div>
            </section>

            {trailerKey && (
                <TrailerModal
                    videoKey={trailerKey}
                    onClose={() => setTrailerKey(null)}
                />
            )}
        </>
    );
};

export default BrowseHero;