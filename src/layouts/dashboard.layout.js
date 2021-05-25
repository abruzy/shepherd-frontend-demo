import React from 'react'

import SideNav from '../components/sidenav/sidenav'

import './dashboard.scss'

const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboard-layout'>
      <aside>
        <SideNav />
      </aside>

      <main>
        <div className='dashboard-content'>{children}</div>
      </main>
    </div>
  )
}

export default DashboardLayout
