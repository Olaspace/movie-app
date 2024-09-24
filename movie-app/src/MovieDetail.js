import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title} ({movie.year})</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <iframe title={movie.title} src={movie.trailerLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default MovieDetail;