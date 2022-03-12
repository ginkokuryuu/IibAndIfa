import React from 'react'

export default function Messages({message}) {
  return (
    <div>
        <p>{message.sender}</p>
        <p>{message.message}</p>
        <p>============================</p>
    </div>
  )
}
