import LandingHero from "../components/LandingHero";
import MovieList from "../components/MovieList";

const Landing = () => {
    
  return (
    <div className="bg-black text-white min-h-screen">
      <LandingHero />
      <MovieList title="Trending Now" endpoint="/trending/movie/week" />
    </div>
  );
};

export default Landing;