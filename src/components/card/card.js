import React, { useState } from 'react'

import './card.scss'

const Card = ({ children, title, icon }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const handleExpanded = () => setIsExpanded(prev => !prev)

  return (
    <div className='card'>
      <div className={`heading cta ${isExpanded ? 'rounded' : 'rounded-full'}`}>
        <img src={icon} alt='home' className='home-icon' />
        <h2>{title}</h2>
        {title === 'agenda' ? <img src='/images/help.svg' alt='help' /> : null}

        <div className='spacer' />
        {title === 'agenda' ? (
          <>
            {isExpanded ? (
              <img
                onClick={handleExpanded}
                src='/images/arrow-up.svg'
                alt='arrow'
                className='arrow-icon'
              />
            ) : (
              <img
                onClick={handleExpanded}
                src='/images/arrow-down.svg'
                alt='arrow'
                className='arrow-icon'
              />
            )}
          </>
        ) : null}
      </div>
      {isExpanded && <div className='body cta'>{children}</div>}
    </div>
  )
}

export default Card
