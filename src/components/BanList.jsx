import React from 'react';

export function BanList({ banList, onRemove }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Banned Breeds</h2>
      {banList.length === 0 ? (
        <p className="text-gray-600 text-center">No breeds banned yet.</p>
      ) : (
        <ul className="space-y-2">
          {banList.map((breed, index) => (
            <li key={index} className="flex justify-between items-center capitalize">
              <span>{breed.replace('-', ' ')}</span>
              <button
                onClick={() => onRemove(breed)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}