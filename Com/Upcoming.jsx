import React from 'react'
import { useState, useEffect } from "react";
const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
      const getMovies = async () => {
        const result = await fetch(
          " https://api.themoviedb.org/3/movie/upcoming?api_key=b23286c3a57cc65c9dbb4161cbf89f13"
        );
        const api = await result.json();
        setUpcoming(api.results);
    
      };
      getMovies();
    }, []);
  return (
    <section className="container">
    <div className="grid">
      {upcoming.map((movie, index) => (
        <div key={index} className="card">
          <link></link>
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
        </div>
      ))}
    </div>
  </section>
  )
}

export default Upcoming