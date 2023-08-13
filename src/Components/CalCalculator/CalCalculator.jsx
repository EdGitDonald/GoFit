import React from 'react'
import './CalCalculator.css'

function CalCalculator() {
  return (
    <div className='calcalculator-container'>
        <h1>CalCalculator</h1>
        <p>Height</p>
        <p>Weight</p>
        <p>Age</p>
        {/* Make the  tag below a toggle between a number for cal surplus and defict. */}
        <p>Surplus/Defict</p>

    </div>
  )
}

export default CalCalculator