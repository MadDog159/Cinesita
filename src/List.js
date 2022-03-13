import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";
import MovieBox from "./MovieBox";

const List = (props) => {
  const [list, setList] = useState();
  let [page, setPage] = useState(1);

  useEffect(() => {
    if (props.search) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=dea5d1d72df02ec5cc84f8afd612808b&query=${props.search}&language=es-MX&page=${page}`
        )
        .then(({ data }) => setList(data.results))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=dea5d1d72df02ec5cc84f8afd612808b&language=es-MX&page=${page}`
        )
        .then(({ data }) => setList(data.results))
        .catch((err) => console.log(err));
    }
  }, [page, props.search]);

  return (
    <div>
      <Item page={page} setPage={setPage} />
      <div className="container">
        <div className="grid">
          {list && list.map((movie) => <MovieBox list={movie} />)}
        </div>
        <Item page={page} setPage={setPage} />
      </div>
    </div>
  );
};
export default List;
