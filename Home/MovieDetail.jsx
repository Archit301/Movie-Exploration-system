import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState(null);
  const [ottPlatforms, setOttPlatforms] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  // Function to save a movie to the collection
  const saveMovie = () => {
    // Check if the movie is already saved
    if (!savedMovies.find(savedMovie => savedMovie.id === movie.id)) {
      const updatedMovies = [...savedMovies, movie];
      setSavedMovies(updatedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
    }
    toast.success('Movie saved to collection!', { autoClose: 3000 });
  };

 
  

  useEffect(() => {

    const savedMoviesFromStorage = JSON.parse(localStorage.getItem('savedMovies'));
    if (savedMoviesFromStorage) {
      setSavedMovies(savedMoviesFromStorage);
    }
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=01d13da7b4f6ccd0073c61b9d8e168ea&append_to_response=videos,credits,watch/providers`);
        const data = await response.json();
        setMovie(data);
        
        if (data.credits) {
          setCast(data.credits.cast.slice(0, 12)); // Get top 12 cast members
          // Find the director
          const directorData = data.credits.crew.find(member => member.job === 'Director');
          setDirector(directorData);
        }

        // Extract OTT platforms
        if (data['watch/providers'] && data['watch/providers'].results) {
          const providers = data['watch/providers'].results;
          setOttPlatforms(providers.US || providers.IN || []); // Change 'US' to your desired region code
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative md:col-span-1">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full" />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <p className="text-gray-400 mt-2">Release Date: {movie.release_date}</p>
                <p className="text-xl mt-4">{movie.overview}</p>
                <button onClick={saveMovie} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Save</button>
                <ToastContainer />
                <div className="flex items-center mt-4">
                  <span className="bg-blue-600 text-white py-1 px-3 rounded-full mr-2">{movie.vote_average}</span>
                  <span className="text-gray-400">{movie.vote_count} votes</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Genres</h2>
              <div className="flex flex-wrap mt-2">
                {movie.genres.map(genre => (
                  <span key={genre.id} className="bg-gray-700 text-sm text-white py-1 px-2 rounded mr-2 mb-2">{genre.name}</span>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Director</h2>
              <p className="mt-2">{director ? director.name : 'Not available'}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Cast</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {cast.map(member => (
                  <div key={member.cast_id} className="flex flex-col items-center">
                    <img src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name} className="w-24 h-24 rounded-full mb-2" />
                    <p className="text-center text-sm text-gray-300">{member.name}</p>
                    <p className="text-center text-sm text-gray-500">{member.character}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Additional Information</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-gray-400">Runtime</p>
                  <p className="text-white">{movie.runtime} minutes</p>
                </div>
                <div>
                  <p className="text-gray-400">Budget</p>
                  <p className="text-white">${movie.budget.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-400">Revenue</p>
                  <p className="text-white">${movie.revenue.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-400">Production Companies</p>
                  <div>
                    {movie.production_companies.map(company => (
                      <p key={company.id} className="text-white">{company.name}</p>
                    ))}
                  </div>
                </div>
                {movie.videos && movie.videos.results.length > 0 && (
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Trailer</h2>
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                        title="Trailer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Available on OTT Platforms</h2>
              <div className="grid grid-cols-2 gap-4 mt-2">
              {Array.isArray(ottPlatforms) && ottPlatforms.length > 0 ? (
                  ottPlatforms.map(platform => (
                    <div key={platform.provider_id} className="flex flex-col items-center">
                      <img src={`https://image.tmdb.org/t/p/w200${platform.logo_path}`} alt={platform.provider_name} className="w-24 h-24 rounded-full mb-2" />
                      <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-center text-sm text-blue-400 hover:underline">{platform.provider_name}</a>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-400">Not available on any OTT platforms.</p>
                )}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
