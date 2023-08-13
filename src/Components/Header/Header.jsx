import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <p>Go Fit</p>
        <nav className='nav-menu'>
        <p className='border'>Coaches</p>
        <p className='border'>Meals</p>
        <p className='border'>Sign up</p>
        </nav>
        
    </div>
  )
}

export default Header