import {Link} from 'react-router-dom';

function MovieCard({title}) {
  return (
    <article>
        <h2>{title.title}</h2>
        <p>
          <Link to={`/movie/${title.id}`}>View Info</Link>
        </p>
    </article>
  );
};

export default MovieCard;