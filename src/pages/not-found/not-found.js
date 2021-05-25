import React from 'react'
import { useHistory } from 'react-router'

import { DASHBOARD_ROUTE } from '../../utils/routes'

import './not-found.scss'

const NotFound = () => {
  const { push } = useHistory()

  const onClickButton = () => push(DASHBOARD_ROUTE)

  return (
    <div className='not-found'>
      <h1>Something's Not Right</h1>
      <p>
        Hey, there... Seems the page you're currently looking for does not
        exist. Don't be alarmed, <br /> we'll help you find your way back. Click
        on the button below to go back home.
      </p>
      <button onClick={onClickButton}>Take Me Home</button>
    </div>
  )
}

export default NotFound
