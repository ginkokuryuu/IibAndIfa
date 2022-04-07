import React from 'react'
import '../css/Messages.css'

export default function Messages({message}) {
  return (
    <div className='message'>
        <p className='sender'>{message.sender}</p>
        <p className='message-text'>{message.messages}</p>
    </div>
  )
}
