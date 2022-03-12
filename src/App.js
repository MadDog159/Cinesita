import React, {useEffect} from 'react';
import './App.css';
import Menu from './Menu'
import {LoginButton} from './Login'
import {LogoutButton} from './Logout'
import {Profile} from './Profile'
import { useAuth0 } from '@auth0/auth0-react';


function App(){
    const { isAuthenticated } = useAuth0();
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
        {isAuthenticated ? (
          <>
          <Profile />
          <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        
        
      </div>
    )
  
}
export default App;
