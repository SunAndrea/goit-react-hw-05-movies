import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviesList from 'components/MovieList/MoviesList';

const Movies = ({ onSubmitHanler, movies }) => {
  const [inputValue, setInputValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = (query, value) => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onChange = evt => {
    setInputValue(evt.target.value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    onSubmitHanler(inputValue);
    updateQueryString(inputValue, `query`);

    setInputValue('');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={inputValue}></input>
        <button type="submit">Search</button>
      </form>
      <MoviesList list={movies} />
    </>
  );
};

Movies.propTypes = {
  onSubmitHanler: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
};

export default Movies;
