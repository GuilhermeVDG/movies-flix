import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { toast } from 'react-toastify';

function Favorites(){
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@movies');
    setMovies(JSON.parse(myList || []));
  }, []);

  function deleteMovie(id) {
    let filterMovies = movies.filter( item => item.id !== id );

    setMovies(filterMovies);
    localStorage.setItem('@movies', JSON.stringify(filterMovies));
    toast.success("Filme excluido com sucesso.");
  }

  return(
    <div className='my-movies'>
      <h1>Meus Filmes</h1>

      {movies.length === 0 && <span>Voce nao possui filmes salvos :(</span>}

      <ul>
        {movies.map(item => {
          return(
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => deleteMovie(item.id)}>Excluir</button>
              </div>
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favorites;