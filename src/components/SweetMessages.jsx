import React, { useState, useRef, useEffect } from 'react'
import MessagesList from './MessagesList'
import {v4 as uuidv4} from 'uuid'

export default function SweetMessages() {
    const [messages, setMessages] =  useState([
        {
            id: 1,
            sender: 'habib',
            message: 'Congrats'
        },
        {
            id: 2,
            sender: 'tampan',
            message: 'Congratulations'
        }
    ])
    const messageRef = useRef();
    const nameRef = useRef();

    useEffect(() => {
        console.log("Fetch Data")
    }, [])

    function handleAddMessage(e){
        var name = nameRef.current.value;
        var message = messageRef.current.value;

        if(message === '') return;
        if(name === '') name = "Anonymous";

        setMessages(prevMessage => {
            return [...prevMessage, {id:uuidv4(), sender: name, message: message}]
        })
        
        nameRef.current.value = null;
        messageRef.current.value = null;
    }

    return (
        <div>
            <h1>Sweet Messages</h1>
            <MessagesList messages={messages} />
            <input ref={nameRef} type={"text"} placeholder="Enter your name"/>
            <input ref={messageRef} type={"text"} placeholder="Enter your message"/>
            <button onClick={handleAddMessage}>Add Message</button>
        </div>
    )
}
