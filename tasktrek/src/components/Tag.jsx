import React from 'react'
import "../styles/Tag.css"

const Tag = (props) => {
 
  return (
    <button className='tag'>{props.tagName}</button>
  )
}

export default Tag