import React from 'react';

function Card2({ sport, time, completed, score, teams }) {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 w-40 shadow-lg flex-shrink-0">
      <div className="flex justify-center items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
        <span className="text-gray-300">{teams || 'v/s'}</span>
        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
      </div>
      <div className="text-center">
        <p className="text-xs uppercase text-gray-400">{sport || 'Sport'}</p>
        <p className="text-sm font-semibold mt-1">Time: {time || '12:30'}</p>
        {completed && score && (
          <p className="text-sm mt-2">{score}</p> // Display score if completed
        )}
        <button className="bg-green-600 text-xs uppercase font-semibold py-1 px-3 rounded mt-3 hover:bg-green-500">
          Scorecard
        </button>
      </div>
    </div>
  );
}

export default Card2;
