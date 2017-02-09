import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <li class="nav-item"><a href="#" class="nav-link active">{children}</a></li>
  }

  return (
    <li class="nav-item">
      <a href="#" class="nav-link"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
      >{children}
      </a>
      
    </li>
  )
}

export default Link