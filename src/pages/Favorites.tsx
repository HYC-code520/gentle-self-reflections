
import React, { useEffect, useState } from 'react';

interface Reframe {
  original: string;
  reframe: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Reframe[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteReframes');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-heading mb-6">My Favorite Reframes</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite reframes yet.</p>
      ) : (
        <div className="space-y-4">
          {favorites.map((fav, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-softPink/20">
              <p className="font-medium text-gray-700">{fav.original}</p>
              <p className="text-gray-600 mt-2">{fav.reframe}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
