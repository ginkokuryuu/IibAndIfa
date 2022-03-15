import React, { useEffect } from 'react'
import '../css/TheInvitation.css'
import '../css/FirstLoadPopUp.css'
import { useScrollLock } from '../libs/useScrollLock'

export default function TheInvitation() {
    const { lockScroll, unlockScroll } = useScrollLock();

    useEffect(() => {
        lockScroll();
    }, [])

    function openInvitation(e) {
        var target = e.target.parentNode.parentNode;
        target.className += ' animate';
        unlockScroll();
    }

    return (
        <div>
            <div className="imageContainer banner">
                <img className='imageContained' src="/iib-and-ifa/images/photos/Test.png" alt='' />
                <div className='imageOverlay'></div>

                <div className='text'>
                    <div className='title'>The Wedding</div>
                    <div className='name'>Habib & Anggi</div>
                    <div className='date'>
                        11 . 1 . 2024
                    </div>
                </div>

                <img className='imageFrame-bot' src="/iib-and-ifa/images/shapes/b1.png" alt="" />

                <div className='border'>
                    <div className='left-top'></div>
                    <div className='left-bot'></div>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                </div>

                <div className='popup'>
                    <div className='popup-container'>
                        <div className='popup-text'>
                            <div className='invited'>
                                You Are Invited!
                            </div>
                            <div className='wedding-celebration'>
                                The Wedding Celebration of
                            </div>
                            <div className='name'>
                                Habib & Anggi
                            </div>
                        </div>
                        <button className='open-invite' onClick={openInvitation}>
                            Open Invitation
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

const imagePrefabBot = (image, frame, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={image} alt="" />
            <img className='imageFrame-bot' src={frame} alt="" />
        </div>
    )
}

const imagePrefabTop = (image, frame, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={image} alt='' />
            <img className='imageFrame-top' src={frame} alt="" />
        </div>
    )
}

const imagePrefabTopBot = (image, frameTop, frameBot, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={image} alt='' />
            <img className='imageFrame-top' src={frameTop} alt="" />
            <img className='imageFrame-bot' src={frameBot} alt="" />
        </div>
    )
}
