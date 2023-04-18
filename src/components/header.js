import React from 'react'
import { logos } from '../assets/assets'

const logo=logos.foodoun

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Foodoun Logo" className="header-logo" />
        <h1 className="header-title">Foodoun</h1>
      </div>
    </header>
  )
}

export default Header