import React, { useState } from 'react';
import MovieCard from './MovieCard';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setSearchResults([]);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=01d13da7b4f6ccd0073c61b9d8e168ea&query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (error) {
      setError('An error occurred while fetching search results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Discover Movies</h2>

        <div className="mb-8 flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for movies..."
            className="border border-gray-300 rounded px-4 py-2 w-2/3 md:w-1/3 text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {searchResults.length > 0 ? (
            searchResults.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            !loading && <p className="text-center">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;