import * as React from 'react'

function PlusIcon (props) {
  return (
    <svg
      width='1.5em'
      height='1.5em'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm4-9h-3V6a1 1 0 00-2 0v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 000-2z'
        fill='#272727'
        fillOpacity={props.fillOpacity || 0.6}
      />
    </svg>
  )
}

export default PlusIcon
