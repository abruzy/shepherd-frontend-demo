import React from 'react'

import './dashboard.scss'

const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboard-layout'>
      <aside>aside</aside>

      <main>
        <div className='dashboard-content'>{children}</div>
      </main>
    </div>
  )
}

export default DashboardLayout
