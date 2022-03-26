import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getDatabase, ref, push, child, update } from 'firebase/database'
import '../css/RSVP.css'

export default function RSVP() {
    const rsvpChoice = useRef();
    const nameRef = useRef();
    const alamatRef = useRef();

    const dbRef = getDatabase();

    function handleAddRSVP(e) {
        var name = nameRef.current.value;
        var choice = rsvpChoice.current.value;
        var alamat = alamatRef.current.value;

        if (name === '') return;
        if (choice === "default") return;
        if (alamat === '') return;

        try {
            postRSVP(name, choice, alamat);
        } catch (error) {
            console.log(error);
        }

        nameRef.current.value = null;
        rsvpChoice.current.value = "default";
        alamatRef.current.value = null;
    }

    function postRSVP(name, choice, alamat) {
        const postData = {
            id: uuidv4(),
            name: name,
            alamat: alamat,
            choice: choice
        };

        const newPostKey = push(child(ref(dbRef), '/rsvp/')).key;

        const updates = {};
        updates['rsvp/' + newPostKey] = postData;

        return update(ref(dbRef), updates);
    }

    return (
        <div className='rsvp'>
            <h1 className='rsvp-title'>RSVP</h1>
            <div className='rsvp--desc'>
                We can't wait for our wedding day with you, please confirm your presence. Thank you.
            </div>
            <div className='rsvp-form'>
                <input ref={nameRef} type={"text"} placeholder="Nama" />
                <input ref={alamatRef} type={"text"} placeholder="Alamat" />
                <select ref={rsvpChoice}>
                    <option value="default">Apakah Anda Akan Hadir?</option>
                    <option value="yes">Ya</option>
                    <option value="no">Maaf, </option>
                </select>
                <button onClick={handleAddRSVP}>Add Message</button>
            </div>
        </div>
    )
}
