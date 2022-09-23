import React from 'react'
import Logo from '../../assets/logo.png'
import './Headers.css'
const Header = () => {
  return (
    <div className='header'>

      <img src={Logo} alt=""  className='logo'/>

      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Textimonials</li>
        
      </ul>
      
    </div>
  )
}

export default Header
