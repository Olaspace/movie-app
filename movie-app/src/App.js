import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      image: "https://m.media-amazon.com/images/M/MV5BMDFkY2JlMjUtMmJhNC00ZDYxLWFkMzEtZThmOTc5NjQ2N2M2XkEyXkFqcGdeQXVyNjU0OTQ0OTc@._V1_.jpg",
      description: "A prisoner who is sentenced to life in prison for a murder he didn't commit finds himself adapting to the harsh realities of prison life.",
      trailerLink: "https://www.youtube.com/embed/NDZ1d96oF2Q"
    },
    // Add more movies here
  ];

  return (
    <div className="App">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title} ({movie.year})</h2>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    image: "https://m.media-amazon.com/images/M/MV5BMDFkY2JlMjUtMmJhNC00ZDYxLWFkMzEtZThmOTc5NjQ2N2M2XkEyXkFqcGdeQXVyNjU0OTQ0OTc@._V1_.jpg",
    description: "A prisoner who is sentenced to life in prison for a murder he didn't commit finds himself adapting to the harsh realities of prison life.",
    trailerLink: "https://www.youtube.com/embed/NDZ1d96oF2Q"
  },
  // ... other movies
];

export default App;