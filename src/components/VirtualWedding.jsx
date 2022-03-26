import React from 'react'
import '../css/VirtualWedding.css'

export default function VirtualWedding() {
    const openLink = (url) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className='virtual'>
            <div className='virtual-title'>
                Virtual Wedding
            </div>
            <div className='virtual-desc'>
                Considering the current situation, we can't invite all of our beloved friends directly.
                It's important for us to keep everything safe. So in addition to the live event, we are also planning to launch our
                wedding virtually via zoom which you can follow via the following link
            </div>
            <div className='virtual-link' onClick={() => openLink("https://google.com")}>
                Zoom Live Event
            </div>
        </div>
    )
}
