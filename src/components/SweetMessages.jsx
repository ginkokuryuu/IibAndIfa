import React, { useState, useRef, useEffect } from 'react'
import MessagesList from './MessagesList'
import { v4 as uuidv4 } from 'uuid'
import { getDatabase, ref, onValue, push, child, update } from 'firebase/database'
import '../css/Messages.css'

export default function SweetMessages() {
    const [messages, setMessages] = useState([])
    const messageRef = useRef();
    const nameRef = useRef();

    const dbRef = getDatabase();
    const allMessagesRef = ref(dbRef, 'messages/');

    function updateMessages(data) {
        var arrayData = Object.entries(data);
        var arrayResult = [];
        arrayData.map(theData => {
            arrayResult = [theData[1], ...arrayResult];
        })

        setMessages(arrayResult);
    }

    useEffect(() => {
        const listener = onValue(allMessagesRef, snapshot => {
            const data = snapshot.val();
            updateMessages(data);
        });
        return listener;
    }, []);

    function handleAddMessage(e) {
        var name = nameRef.current.value;
        var message = messageRef.current.value;

        if (message === '') return;
        if (name === '') name = "Anonymous";

        try {
            postMessage(name, message);
        } catch (error) {
            console.log(error);
        }

        nameRef.current.value = null;
        messageRef.current.value = null;
    }

    function postMessage(sender, message) {
        const postData = {
            id: uuidv4(),
            sender: sender,
            messages: message
        };

        const newPostKey = push(child(ref(dbRef), '/messages/')).key;

        const updates = {};
        updates['messages/' + newPostKey] = postData;

        return update(ref(dbRef), updates);
    }

    return (
        <div className='message-container'>
            <h1 className='message-title'>Sweet Messages</h1>
            <div className='message-form'>
                <input className='form-child' ref={nameRef} type={"text"} placeholder="Name" />
                <textarea rows={3} className='form-child text-input' ref={messageRef} type={"text"} placeholder="Your message"></textarea>
                <button className='submit-btn' onClick={handleAddMessage}>Send</button>
            </div>
            <MessagesList messages={messages} />
        </div>
    )
}
