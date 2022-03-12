import React, {useEffect} from 'react';
import './App.css';
import Menu from './Menu'


function App(){
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=dea5d1d72df02ec5cc84f8afd612808b'
    const fetchApi = async () => {
      const response = await fetch(url)
      console.log(response.statusText)
    }
    useEffect(() => {
      fetchApi()
    }, [])
    return (
      <div className='app'>
        <Menu title="Cinesita" />
      </div>
    )
  
}
export default App;
