import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // ...

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title} ({movie.year})</h2>
        <Link to={`/movie/${movie.id}`}>View Details</Link>
      </div>
    );
  }