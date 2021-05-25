import React from 'react'

import './button.scss'

const Button = ({ icon, text, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {icon}
      {text}
    </button>
  )
}

export default Button
