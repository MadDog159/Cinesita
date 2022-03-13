import axios from "axios";

import MovieBox from "./MovieBox.js";
const SearchMovie = (input) => {
  const apiKey = "dea5d1d72df02ec5cc84f8afd612808b";

  const movies = async (input) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}&language=es-MX`;
    const movies = await axios(url);
    const json = await movies.json();

    return json;
  };
  return (
    <div>
      <div className="container">
        <div className="grid">
          {movies(input) && movies.map((movie) => <MovieBox list={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
