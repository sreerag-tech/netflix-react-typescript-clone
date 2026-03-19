import MovieList from '../components/MovieList';
import BrowseHero  from '../components/BrowseHero';

const Home = () => {
    return (
        <div className="bg-black text-white">
            <BrowseHero />

            <MovieList
                title="Trending Now"
                endpoint="/trending/movie/week"
            />

            <MovieList
                title="Top Rated"
                endpoint="/movie/top_rated"
            />

            <MovieList
                title="Action Movies"
                endpoint="/discover/movie?with_genres=28"
            />


        </div>
    )
}
export default Home;