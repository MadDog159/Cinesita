import { useEffect, useState } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";

const Home = () => {
  const [list, setList] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=dea5d1d72df02ec5cc84f8afd612808b&language=es-MX&page=1`
      )
      .then(({ data }) => setList(data.results))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <div className="container">
        <div className="grid">
          {list && list.map((movie) => <MovieBox list={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;