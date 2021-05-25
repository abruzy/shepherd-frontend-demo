import * as React from 'react'

function HomeIcon (props) {
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
        d='M8 11H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 7H2v-5h5v5zM19 0h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1zm-1 7h-5V2h5v5zm1 4h-7a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1zm-1 7h-5v-5h5v5zM8 0H1a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V1a1 1 0 00-1-1zM7 7H2V2h5v5z'
        fill='#272727'
        fillOpacity={props.fillOpacity || 0.6}
      />
    </svg>
  )
}

export default HomeIcon
