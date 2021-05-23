import * as React from 'react'

function NotesIcon (props) {
  return (
    <svg
      width='1.5em'
      height='1.5em'
      viewBox='0 0 16 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9 12H5a1 1 0 000 2h4a1 1 0 000-2zm4-10h-1.18A3 3 0 009 0H7a3 3 0 00-2.82 2H3a3 3 0 00-3 3v12a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3zM6 3a1 1 0 011-1h2a1 1 0 011 1v1H6V3zm8 14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h1v1a1 1 0 001 1h6a1 1 0 001-1V4h1a1 1 0 011 1v12zm-3-9H5a1 1 0 000 2h6a1 1 0 100-2z'
        fill='#272727'
        fillOpacity={props.fillOpacity || 0.6}
      />
    </svg>
  )
}

export default NotesIcon
