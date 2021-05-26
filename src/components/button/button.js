import React from 'react'

import './button.scss'

const Button = ({ icon, text, onClick }) => {
  return (
    <button onClick={onClick}>
      {icon}
      {text}
    </button>
  )
}

export default Button
