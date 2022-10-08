import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

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

      setMovies(response.data.results.slice(0, 10));
    }

    loadFilmes();

  }, [])
  
  return(
    <div className='container'>
      <div className='list-movies'>
        {movies.map(movie => {
          return(
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
              <Link to={`/filme/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Home;