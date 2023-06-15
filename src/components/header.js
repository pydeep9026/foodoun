import React, { useState } from 'react'
import { logos } from '../assets/assets'
import user from './user.png'
import { useNavigate } from 'react-router-dom'

const logo=logos.foodoun

function Header() {
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  const handleMouseEnter = () => {
    setShowLogout(true);
  }

  const handleMouseLeave = () => {
    setShowLogout(false);
  }

  const handleLogout = () => {
    navigate('/login')
  }


  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Foodoun Logo" className="header-logo" />
        <h1 className="header-title">Foodoun</h1>
        <div className='user-container'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={user} className='usericon' />
          <h3 className='username'>Shivanshu</h3>
          {showLogout && (
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header