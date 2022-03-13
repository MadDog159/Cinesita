import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import Home from './Home';
import List from './List';
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
    const [search,setSearch]=useState(null)
    useEffect(()=>{
      console.log("Esto es en app : ",search)
    },[search])
    return (
      <>
        <div className='app'>
          <Menu setSearchMovie={setSearch}/>
          
        </div>
        <Router>
          <Routes>
            <Route path='/' element={<Home search={search} />} />
            <Route path='/ListaPeliculas' element={<List search={search}/>} />
          </Routes>

        </Router>
      </>
    )
  
}
export default App;
