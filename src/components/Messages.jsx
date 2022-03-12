import React from 'react'

export default function Messages({message}) {
  return (
    <div>
        <p>{message.sender}</p>
        <p>{message.messages}</p>
        <p>============================</p>
    </div>
  )
}
