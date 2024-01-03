import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
const PopularDeatls = () => {
    const {id} = useParams()
    const [displayPopular,setDisplayPopular] = useState()
    useEffect(() => {
        const getMovies = async () => {
          const result = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=b23286c3a57cc65c9dbb4161cbf89f13`
          );
          const api = await result.json();
          console.log(api)
          setDisplayPopular(api);
      
        };
        getMovies();
      }, [id]);
  return (
  <>
    {displayPopular ? <>
        <h1>{displayPopular.title}</h1>
        {displayPopular.belongs_to_collection && displayPopular.belongs_to_collection.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${displayPopular.belongs_to_collection.backdrop_path}`}
              alt=""
            />
          ) : (
            <p>No backdrop image available</p>
          )}
    </> : <>()</>}
  </>
  )
}

export default PopularDeatls
