import type { Movie } from "./movie";

interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export const MovieCard = ({ movie, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(movie)}
      className="min-w-[160px] cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="rounded-md"
      />
    </div>
  );
};