import React from 'react'
import { Link } from 'react-router-dom';

function TrailerCard() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 w-80 flex-none">
    <img src={`https://image.tmdb.org/t/p/w500${trailer.poster_path}`} alt={trailer.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{trailer.title}</h2>
      <p className="text-gray-700 mt-2 line-clamp-3">{trailer.overview}</p>
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm">{trailer.vote_average} / 10</button>
        <Link to={`/movie/${trailer.id}`} className="text-blue-600 hover:text-blue-800 text-sm">View Details</Link>
      </div>
    </div>
  </div>
  )
}

export default TrailerCard
