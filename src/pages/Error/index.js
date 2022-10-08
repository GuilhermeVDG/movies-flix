import { Link } from 'react-router-dom';
import './style.css';

function Error(){
  return(
    <div className='not-found'>
      <h1>404</h1>
      <h2>Not found.</h2>
      <Link to='/'>Ir para filmes</Link>
    </div>
  )
}

export default Error;