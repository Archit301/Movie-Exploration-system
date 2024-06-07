import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Categories = ({ genreId, genreName, industryId, industryName }) => {
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()

   useEffect(()=>{
    const fetchMovies=async()=>{
        try {
            const response=await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=01d13da7b4f6ccd0073c61b9d8e168ea&with_genres=${genreId}&with_industries=${industryId}`
              );
              const data=await response.json()
              setMovies(data.results);
              setLoading(false);

        } catch (error) {
            console.error(`Error fetching ${genreName} movies:`, error);
            setLoading(false);
        }
    }
    fetchMovies()
},[genreId, genreName, industryId])



if (loading) {
    return <div className="text-white">Loading {genreName} movies...</div>;
  }
  return(
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{industryName} -{genreName} Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <p className="text-gray-400">Rating: {movie.vote_average}</p>
            <p className="text-gray-400">Release Date: {movie.release_date}</p>
            <p className="mt-2">{movie.overview}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              View Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default Categories
