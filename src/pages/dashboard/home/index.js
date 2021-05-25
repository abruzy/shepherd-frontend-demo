import React, { useState } from 'react'

import DashboardLayout from '../../../layouts/dashboard.layout'
import Button from '../../../components/button/button'
import Card from '../../../components/card/card'
import PlusIcon from '../../../components/vectors/plus-icon'
import { useGetData } from '../../../hooks/useGetData'

import './dash.scss'

const Dashboard = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [addCheckbox, setAddCheckbox] = useState([
    {
      id: 1,
      label: 'Task 1',
      value: false
    },
    {
      id: 2,
      label: 'Task 2',
      value: false
    },
    {
      id: 3,
      label: 'Task 3',
      value: true
    }
  ])
  const [documents] = useGetData()

  const handleHover = () => setIsHovered(prev => !prev)

  const handleAddCheckBox = () => {
    setAddCheckbox(oldState => [
      ...oldState,
      {
        id: oldState.length + 1,
        label: `Task ${oldState.length + 1}`,
        value: false
      }
    ])
  }

  const handleInputChange = item => {
    console.log({ item })
    const otherItems = addCheckbox.filter(check => item.id !== check.id)
    otherItems.push({ ...item, value: !item.value })
    setAddCheckbox(otherItems)
  }

  return (
    <DashboardLayout>
      <div className='dash-home'>
        <h1>Dashboard</h1>
        <div className='card-container'>
          <Card title='agenda' icon='/images/home.svg'>
            <div className='wrapper'>
              {addCheckbox
                .sort((a, b) => a.id - b.id)
                .map(item => (
                  <div key={item.id} className='form-control'>
                    <input
                      onChange={() => handleInputChange(item)}
                      checked={item.value}
                      type='checkbox'
                      name='checkbox'
                      id='checkbox'
                    />
                    <label htmlFor='checkbox'>{item.label}</label>
                  </div>
                ))}
            </div>
            <Button
              className='btn'
              onClick={handleAddCheckBox}
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
                {documents.length === 0 && <p>Loading...</p>}
                {documents.map((documents, index) => (
                  <div key={index}>
                    <p>{documents.value.note}</p>
                    <p>{documents.value.note2}</p>
                  </div>
                ))}
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
