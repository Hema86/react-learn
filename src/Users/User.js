import React from 'react'

export default function User (props) {
  return (
    <div>
      <div>Name: {props.children} | age: {props.age}</div>
    </div>
  )
}
