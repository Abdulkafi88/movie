import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const TopRatedDeatls = () => {
  const { id } = useParams();
  const [displayTopRatedDeatls, setDisplayTopRatedDeatls] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b23286c3a57cc65c9dbb4161cbf89f13`
      );
      const api = await result.json();
      console.log(api)
      setDisplayTopRatedDeatls(api);
    };
    getMovies();
  }, []);
  return (
    <>
      {displayTopRatedDeatls ? (
        <>
          {" "}
          <h1>{displayTopRatedDeatls.title}</h1>
          {displayTopRatedDeatls.belongs_to_collection && displayTopRatedDeatls.belongs_to_collection.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${displayTopRatedDeatls.belongs_to_collection.backdrop_path}`}
              alt=""
            />
          ) : (
            <p>No backdrop image available</p>
          )}
          
        </>
      ) : (
        <>
          {" "}
          <h1>no title avilble </h1>
        </>
      )}
    </>
  );
};

export default TopRatedDeatls;
