import { useEffect, useState } from "react";
import Item from './Item';
import axios from "axios";
import { useForm } from "react-hook-form";
import Menu from "./Menu";
import MovieBox from "./MovieBox";


    const Search = () => {
        const [list, setList] = useState();
        let [page, setPage] = useState(1);
        let [ search, setSearch ] = useState("");
      
        useEffect(() => {
          axios
            .get(
              `https://api.themoviedb.org/3/search/movie?api_key=dea5d1d72df02ec5cc84f8afd612808b&query="${search}"&page=${page}&language=es-MX`
            )
            .then(({ data }) => setList(data.results))
            .catch((err) => console.log(err));
        }, [page]);
      
        return (
          <div>
             <Item page={page} setPage={setPage}/>
            <div className="container">
              <div className="grid">
                {list && list.map((movie) => <MovieBox list={movie} />)}
              </div>
              <Item page={page} setPage={setPage}/>
            </div>
          </div>
        );
        }
export default Search;