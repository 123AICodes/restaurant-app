import React, { useState } from 'react';
import './Navbar.css';
import { RiMenu3Line } from 'react-icons/ri'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from '../../constants/images'

const MenuList = () => {
  return (
    <>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>about</a></li>
      <li className='p__opensans'><a href='#menu'>menu</a></li>
      <li className='p__opensans'><a href='#awards'>awards</a></li>
      <li className='p__opensans'><a href='#contact'>contact</a></li>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="appLogo" />
      </div>
      <ul className='app__navbar-links'>
        <MenuList />
      </ul>
      <div className="app__navbar-login">
        <a href='#login' className='p__opensans'>Login</a>
        <div />
        <a href='/' className='p__opensans' style={{ textTransform: 'none' }}>Book a Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <RiMenu3Line color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <MenuList />
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
