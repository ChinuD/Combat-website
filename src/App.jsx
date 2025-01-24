import React from 'react'
import Card from './components/Card'
import MultipleCardDiv from './components/MultipleCardDiv'
import SlotSection from './components/SlotSection'

const App = () => {
  return (
    <div className='bg-gray-900'>
      <h1 className='text-center text-white text-4xl py-4'>Schedule</h1>
      {/* <Card/> */}
      {/* <MultipleCardDiv/> */}
      <SlotSection/>
    </div>
  )
}

export default App