import React from 'react'

export default function User (props) {
  let age = props.age ? props.age : 'NA'
  return (
    <div>
      <div>Name: {props.children} | age: {age}</div>
    </div>
  )
}
