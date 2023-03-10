import PropTypes from 'prop-types';
import MoviesList from 'components/MovieList/MoviesList';

const Home = ({ movies }) => {
  return (
    <main>
      <MoviesList list={movies} title="Trends movie" />
    </main>
  );
};

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;
