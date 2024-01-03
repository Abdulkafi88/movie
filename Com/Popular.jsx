import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const result = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=b23286c3a57cc65c9dbb4161cbf89f13"
        );
        const api = await result.json();
  
        setPopularMovies(api.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
    getMovies();
  }, []);

  return (
    <section className="container">
      <div className="grid">
        {popularMovies.map((movie, index) => (
          <div key={index} className="card">
            <Link to={`/PopularDeatls/${movie.id}`}>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img
                  src="https://via.placeholder.com/300x450" 
                  alt={movie.title}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  <small className="text-muted">{movie.release_date}</small>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
