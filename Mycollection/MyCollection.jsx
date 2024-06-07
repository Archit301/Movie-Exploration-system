import React, { useEffect,useState} from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCollection = () => {
    const [savedMovies, setSavedMovies] = useState([]);
    useEffect(()=>{
        const savedMoviesFromStorage = JSON.parse(localStorage.getItem('savedMovies')) || [];
        setSavedMovies(savedMoviesFromStorage);
    },[])
    const handleRemoveMovie = (movieId) => {
        // Remove the movie from saved movies
        const updatedSavedMovies = savedMovies.filter(movie => movie.id !== movieId);
        setSavedMovies(updatedSavedMovies);
        // Update local storage
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        toast.success('Movie removed from collection!', { autoClose: 3000 });
      };
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center my-12">
          <h1 className="text-5xl font-bold mb-4">My Collection</h1>
          <p className="text-xl text-gray-300">Your saved movies</p>
        </header>
        {savedMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {savedMovies.map(movie => (
              <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="w-full h-48 object-cover rounded" />
                <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
                <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded" onClick={() => handleRemoveMovie(movie.id)}>Remove</button>
           <ToastContainer/>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No movies saved to your collection.</p>
        )}
      </div>
    </div>
  )
}

export default MyCollection
