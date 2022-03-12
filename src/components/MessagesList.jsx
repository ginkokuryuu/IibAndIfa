import React from 'react'
import Messages from './Messages'

export default function MessagesList({messages}) {
  return (
    <div>
        {messages.map(message => {
            return <Messages key={message.id} message={message}/>
        })}
    </div>
  )
}
