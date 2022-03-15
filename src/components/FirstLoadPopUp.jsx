import React, { useEffect } from 'react'
import { useScrollLock } from '../libs/useScrollLock'
import '../css/FirstLoadPopUp.css'

export default function FirstLoadPopUp() {
    const { lockScroll, unlockScroll } = useScrollLock();

    useEffect(() => {
        // lockScroll();
    }, [])

    return (
        <div className='popup-container'>
            <div className='popup'>

            </div>
        </div>
    )
}
