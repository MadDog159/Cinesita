import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import Home from './Home';
import List from './List';
import Search from './Search';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';


function App(){
    /*const url = 'https://api.themoviedb.org/3/movie/550?api_key=dea5d1d72df02ec5cc84f8afd612808b'
    const fetchApi = async () => {
      const response = await fetch(url)
      console.log(response.statusText)
    }
    useEffect(() => {
      fetchApi()
    }, [])
    <Route path='/search' element={<Search />} />*/
    return (
      <>
        <div className='app'>
          <Menu title="Cinesita" />
        </div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ListaPeliculas' element={<List />} />
            <Route path='/Search' element={<Search />} />
          </Routes>

        </Router>
      </>
    )
  
}
export default App;
