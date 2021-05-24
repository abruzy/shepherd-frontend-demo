import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import HomeIcon from '../vectors/home-icon'
import NotesIcon from '../vectors/notes-icon'
import { DASHBOARD_ROUTE, NOTE_ROUTE, PROFILE_ROUTE } from '../../utils/routes'

import './sidenav.scss'

const activeLink = '1'

const SideNav = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { pathname } = useLocation()

  const handleHover = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const navlinks = [
    {
      id: 1,
      path: DASHBOARD_ROUTE,
      icon: (
        <HomeIcon
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          fillOpacity={
            pathname === DASHBOARD_ROUTE
              ? activeLink
              : isHovered
              ? activeLink
              : ''
          }
        />
      ),
      alt: 'home'
    },
    {
      id: 2,
      path: NOTE_ROUTE,
      icon: (
        <NotesIcon
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          fillOpacity={
            pathname === NOTE_ROUTE ? activeLink : isHovered ? activeLink : ''
          }
        />
      ),
      alt: 'notes'
    }
  ]

  return (
    <nav>
      <NavLink to='/landing' className='brand'>
        <img src='/images/icon.svg' alt='logo' />
      </NavLink>
      {navlinks.map(({ id, path, icon }) => (
        <NavLink key={id} to={path} className='link' activeClassName='active'>
          {icon}
        </NavLink>
      ))}
      <div className='spacer' />
      <div className='profile-container'>
        <NavLink to={PROFILE_ROUTE} className='profile'>
          <img
            src='/images/BRW-Blog_cancelled-due-to-coronavirus 1.png'
            alt='avatar'
          />
        </NavLink>
      </div>
    </nav>
  )
}

export default SideNav
