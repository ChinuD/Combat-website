import React from 'react'
import Card from './Card'
import Card2 from './Card2'

function MultipleCardDiv() {
  return (
    <div>
        <div class="bg-gray-900 p-4">
  <h2 class="text-white text-lg mb-4">Schedule</h2>
  <div class="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar p-4 rounded-lg">
    {/* <!-- Card 1 --> */}
    <Card2/>
    <Card2/>
    <Card2/>
    <Card2/>

    {/* <!-- Duplicate the above card for more cards --> */}
    <Card2/>
    {/* <!-- Add more cards here --> */}
  </div>
</div>

    </div>
  )
}

export default MultipleCardDiv