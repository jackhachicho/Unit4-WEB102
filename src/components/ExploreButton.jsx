import React from 'react';

export function ExploreButton({ onClick, isLoading }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="w-full bg-purple-600 text-white py-3 rounded-lg mt-6 font-bold text-lg hover:bg-purple-700 transition-colors disabled:bg-gray-400"
    >
      {isLoading ? 'Fetching...' : 'Explore More Dogs'}
    </button>
  );
}