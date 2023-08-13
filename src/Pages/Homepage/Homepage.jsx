import React from 'react'
import './Homepage.css'
import CalCalculator from '../../Components/CalCalculator/CalCalculator'
import MealSuggestions from '../../Components/MealSuggestions/MealSuggestions'

function Homepage() {
  return (
    <div className='homepage=container'>
        <CalCalculator />
        <MealSuggestions />

    </div>
  )
}

export default Homepage