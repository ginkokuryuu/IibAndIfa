import React, {useRef} from 'react'
import {v4 as uuidv4} from 'uuid'
import { getDatabase, ref, push, child, update } from 'firebase/database'

export default function RSVP() {
    const rsvpChoice = useRef();
    const nameRef = useRef();

    const dbRef = getDatabase();

    function handleAddRSVP(e){
        var name = nameRef.current.value;
        var choice = rsvpChoice.current.value;

        if(name === '') return;

        try {
            postRSVP(name, choice);
        } catch (error) {
            console.log(error);
        }

        nameRef.current.value = null;
        rsvpChoice.current.value = "yes";
    }

    function postRSVP(name, choice){
        const postData = {
            id: uuidv4(),
            name: name,
            choice: choice
        };

        const newPostKey = push(child(ref(dbRef), '/rsvp/')).key;

        const updates = {};
        updates['rsvp/' + newPostKey] = postData;

        return update(ref(dbRef), updates);
    }

    return (
        <div>
            <h1>RSVP</h1>

            <input ref={nameRef} type={"text"} placeholder="Enter your name" />
            <select ref={rsvpChoice}>
                <option value="yes">Bisa Hadir</option>
                <option value="no">Maaf, Tidak Bisa Hadir</option>
            </select>
            <button onClick={handleAddRSVP}>Add Message</button>
        </div>
    )
}
