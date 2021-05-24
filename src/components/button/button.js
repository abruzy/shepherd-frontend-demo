import React from 'react'

import './button.scss'

const Button = ({ icon, text }) => {
  return (
    <button>
      <img src={icon} alt='plus' className='plus' />
      {text}
    </button>
  )
}

export default Button
