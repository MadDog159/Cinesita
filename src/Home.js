import { useEffect, useState } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";

const Home = (props) => {
  const [list, setList] = useState();
  const apiKey = "dea5d1d72df02ec5cc84f8afd612808b";
  useEffect(() => {
    
      axios
        .get(
          props.search? `https://api.themoviedb.org/3/search/movie?api_key=dea5d1d72df02ec5cc84f8afd612808b&query=${props.search}&page=1`: `https://api.themoviedb.org/3/movie/upcoming?api_key=dea5d1d72df02ec5cc84f8afd612808b&language=es-MX&page=1`
        )
        .then(({ data }) => setList(data.results))
        .catch((err) => console.log(err));

  },[props.search]);

  return (
    <>
      <br></br>
      <main>PROXIMAS A ESTRENAR</main>
      <br></br>
      <div>
        <div className="container">
          <div className="grid">
            {list && list.map((movie) => <MovieBox list={movie} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
