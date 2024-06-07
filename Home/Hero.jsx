import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Hero() {
  const [trailers, setTrailers] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate=useNavigate();


  const handlenavigate=()=>{
    navigate('/discover')
 }

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=01d13da7b4f6ccd0073c61b9d8e168ea');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.results) {
          const trailersData = data.results; // Get first 6 trailers
          setTrailers(trailersData);
        } else {
          console.error('No results found in the fetched data:', data);
        }
      } catch (error) {
        console.error('Error fetching trailers:', error);
      }
    };
   

    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=01d13da7b4f6ccd0073c61b9d8e168ea');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.results) {
          const trendingData = data.results; // Get first 6 trending movies
          setTrendingMovies(trendingData);
        } else {
          console.error('No results found in the fetched data:', data);
        }
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrailers();
    fetchTrendingMovies();

    fetchTrailers();
    fetchTrendingMovies();
  }, []);

  return (
    <section className="hero relative bg-cover bg-center min-h-screen flex flex-col items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Welcome to CineVoyage</h1>
        <p className="text-lg md:text-xl text-white mb-8">Your journey to discovering amazing movies starts here.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg" onClick={handlenavigate}>Explore Now</button>
      </div>

      {/* Trailers Section */}
      <div className="w-full bg-gray-900 py-8 mt-10">
        <div className="container mx-auto">
          <h2 className="text-2xl text-white font-bold mb-4">Latest Trailers</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {trailers.map(trailer => (
              <div key={trailer.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 w-80 flex-none">
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
            ))}
          </div>
        </div>
      </div>

      {/* Trending Movies Section */}
      <div className="w-full bg-gray-800 py-8 mt-10">
        <div className="container mx-auto">
          <h2 className="text-2xl text-white font-bold mb-4">Trending Movies</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {trendingMovies.map(movie => (
              <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 w-80 flex-none">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                  <p className="text-gray-700 mt-2 line-clamp-3">{movie.overview}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="bg-blue-600 text-white py-1 px-3 rounded-full text-sm">{movie.vote_average} / 10</button>
                    <Link to={`/movie/${movie.id}`} className="text-blue-600 hover:text-blue-800 text-sm">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

