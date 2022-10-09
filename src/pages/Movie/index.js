import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import './style.css';
import { toast } from 'react-toastify';

function Movie (){
  const { id } = useParams();
  const navigation = useNavigate();
  const [ movie, setMovie ] = useState({});
  const [ loading , setLoading ] = useState(true);

  useEffect(() => {
    async function loadMovie (){
      await api.get(`movie/${id}`, {
        params: {
          api_key: 'f3bd324ee7a1d3df6e77d6d1f97317d5',
          language: 'pt-BR'
        }
      })
      .then(response => {
        setMovie(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(() => {
        console.log('NOT FOUND.');
        navigation('/', { replace: true });
        return;
      });
      
    }

    loadMovie();
  }, [id, navigation]);

  function saveMovie(){
    const myList = localStorage.getItem('@movies');

    let myMovies = JSON.parse(myList) || [];

    const hasMovie = myMovies.some( movieSave => movieSave.id === movie.id);

    if(hasMovie) {
      toast.warn("Esse filme ja esta na sua lista.");
      return;
    }

    myMovies.push(movie);
    
    localStorage.setItem('@movies', JSON.stringify(myMovies));
    toast.success("Filme Salvo com sucesso.");
  }

  if(loading){
    return(
      <div className='loading'>
        <h1>Carregando o filme...</h1>
      </div>
    )
  }
  
  
  return(
    <div className='movie-info'>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

      <h3>Sinopse: </h3>
      <span>{movie.overview}</span>
      <br/>
      <br/>

      <strong>Avaliação: {movie.vote_average} / 10.000</strong>

      <div className='buttons'>
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${movie.title} Trailer`}>Trailer</a>
        </button>
      </div>
    </div>
  )
}

export default Movie;