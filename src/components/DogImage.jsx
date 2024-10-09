import React from 'react';

export function DogImage({ dogImage, onBan }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center">
      <div className="w-full h-[700px] flex items-center justify-center overflow-hidden">
        <img 
          src={dogImage.url} 
          alt={dogImage.breed} 
          className="max-w-[700px] max-h-[700px] object-contain"
        />
      </div>
      <div className="p-6 text-center w-full">
        <h2 className="text-2xl font-bold mb-2 capitalize">{dogImage.breed.replace('-', ' ')}</h2>
        <button
          onClick={() => onBan(dogImage.breed)}
          className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors"
        >
          Ban Breed: {dogImage.breed}
        </button>
      </div>
    </div>
  );
}
