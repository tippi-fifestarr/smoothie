import React from 'react'

export default function Modal(props){

  return(
    <div className='modal'>
      <button onClick={props.onCardClickHandler}>x</button>
      <h1>{props.title ? props.title : "EXAMPLE MODAL TITLE"}</h1>
    </div>
  )
}