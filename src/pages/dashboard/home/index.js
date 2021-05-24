import React, { useState } from 'react'

import DashboardLayout from '../../../layouts/dashboard.layout'
import Button from '../../../components/button/button'
import Card from '../../../components/card/card'
import PlusIcon from '../../../components/vectors/plus-icon'

import './dash.scss'

const Dashboard = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => setIsHovered(prev => !prev)

  return (
    <DashboardLayout>
      <div className='dash-home'>
        <h1>Dashboard</h1>
        <div className='card-container'>
          <Card title='agenda' icon='/images/home.svg'>
            <div className='wrapper'>
              <div className='form-control'>
                <input type='checkbox' name='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>Task 1</label>
              </div>

              <div className='form-control'>
                <input type='checkbox' name='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>Task 2</label>
              </div>

              <div className='form-control'>
                <input type='checkbox' name='checkbox' id='checkbox' />
                <label htmlFor='checkbox'>Task 3</label>
              </div>
            </div>
            <Button
              icon={
                <PlusIcon
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  fillOpacity={isHovered ? '1' : ''}
                  className='plus'
                />
              }
              text='Add Checkbox'
            />
          </Card>
          <Card title='Personal Notes' icon='/images/file.svg'>
            <div className='wrapper'>
              <div className='content'>
                <p>Instructions:</p>
                <p>
                  This is an input text field you need to create, make sure that
                  the area for text is with correct padding. Limit text to 500
                  characters.
                </p>
                <p>This text must be stored in a Firebase realtime database.</p>
              </div>
              <p className='warning'>Max 500 characters</p>
            </div>
            <Button
              icon={
                <PlusIcon
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                  fillOpacity={isHovered ? '1' : ''}
                  className='plus'
                />
              }
              text='Check Hover State'
            />
          </Card>
          <Card title='Your Location' icon='/images/file.svg'>
            <div className='wrapper'>
              <div className='content'>
                <p>Country: Sweden</p>
                <p>Continent: Europe</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
