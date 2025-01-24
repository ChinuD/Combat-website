import React from 'react'

function Card2() {
  return (
    <div class="bg-gray-800 text-white rounded-lg p-4 w-40 shadow-lg flex-shrink-0">
    <div class="flex justify-center items-center space-x-2 mb-4">
      <div class="w-6 h-6 bg-yellow-500 rounded-full"></div>
      <span class="text-gray-300">v/s</span>
      <div class="w-6 h-6 bg-blue-500 rounded-full"></div>
    </div>
    <div class="text-center">
      <p class="text-xs uppercase text-gray-400">Sport</p>
      <p class="text-sm font-semibold mt-1">Time: 12:30</p>
      {/* <p class="text-sm mt-2">Compas beat Mechanical by 2 points</p> */}  
      {/*To be added when the completed is true and score is displayed */}
      <button class="bg-green-600 text-xs uppercase font-semibold py-1 px-3 rounded mt-3 hover:bg-green-500">
        Scorecard
      </button>
      {/* <p class="text-xs text-gray-500 mt-2">updated 18 minutes ago</p> */}
    </div>
  </div>
  )
}

export default Card2