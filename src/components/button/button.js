import React from 'react'

import './button.scss'

const Button = ({ icon, text }) => {
  return (
    <button>
      {icon}
      {text}
    </button>
  )
}

export default Button
