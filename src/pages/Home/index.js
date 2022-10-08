import { useEffect, useState, UseState } from 'react';
import api from '../../services/api';

function Home(){
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: 'f3bd324ee7a1d3df6e77d6d1f97317d5',
          language: "pt-BR",
          page: 1
        }
      });

      console.log(response.data.results);
    }

    loadFilmes();

  }, [])
  
  return(
    <div>
      <h1>Bem vindo a HOME</h1>
    </div>
  )
}

export default Home;