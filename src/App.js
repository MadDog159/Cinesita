import React from 'react';
import './App.css';
import Menu from './Menu'
import List from './List'
import {LoginButton} from './Login'
import {LogoutButton} from './Logout'

class App extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      peliculas:[],
      isFetch: true

    }
  }

  componentDidMount (){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=dea5d1d72df02ec5cc84f8afd612808b')
    .then(response => response.json())
    .then(peliculasJson => this.setState({ peliculas: peliculasJson.genres, isFetch: false}))
  }


  render() {

    return (
      <div className='app'>
        <Menu title="Cinesita" />
        <LoginButton />
        <LogoutButton />
      </div>
    );
  }
}
export default App;
