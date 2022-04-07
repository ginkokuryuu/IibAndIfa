import React from 'react'
import Messages from './Messages'
import '../css/Messages.css'

export default function MessagesList({messages}) {
  return (
    <div className='message-list'>
        {messages.map(message => {
            return <Messages key={message.id} message={message}/>
        })}
    </div>
  )
}
