import React, { useEffect } from 'react'
import '../css/TheInvitation.css'
import '../css/FirstLoadPopUp.css'
import { useScrollLock } from '../libs/useScrollLock'
import Countdown from './Countdown';
import RevenuePlace from './RevenuePlace';
import VirtualWedding from './VirtualWedding';

export default function TheInvitation() {
    const { lockScroll, unlockScroll } = useScrollLock();

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        lockScroll();
    }, [])

    function scrollTo(offset, callback) {
        const fixedOffset = offset.toFixed();
        const onScroll = function () {
            if (window.pageYOffset.toFixed() === fixedOffset) {
                console.log(window.pageYOffset.toFixed());
                window.removeEventListener('scroll', onScroll)
                callback()
            }
        }

        window.addEventListener('scroll', onScroll)
        onScroll()
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        })
    }

    function openInvitation(e) {
        var target = e.target.parentNode.parentNode;
        target.className += ' animate';
        unlockScroll();
    }

    return (
        <div>
            <div className="imageContainer banner">
                <img className='imageContained' src="/iib-and-ifa/images/photos/Banner.png" alt='' />
                <div className='imageOverlay'></div>

                <div className='text'>
                    {/* <div className='title'>The Wedding</div> */}
                    <div className='name'>
                        syarifah
                        <div className='name-and'>and</div>
                        ibrahim
                    </div>
                    <div className='date'>
                        22 . 5 . 2022
                    </div>
                </div>

                {/* <img className='imageFrame-bot' src="/iib-and-ifa/images/shapes/b1.png" alt="" /> */}

                <div className='popup'>
                    <div className='popup-container'>
                        <img className='top-flower' src="/iib-and-ifa/images/shapes/flower-a.png" alt="" />
                        <img className='bot-flower' src="/iib-and-ifa/images/shapes/flower-a.png" alt="" />
                        <div className='popup-text'>
                            <div className='invited'>
                                You Are Invited!
                            </div>
                            <div className='wedding-celebration'>
                                The Wedding Celebration of
                            </div>
                            <div className='name'>
                                Ifa & Iib
                            </div>
                        </div>
                        <button className='open-invite' onClick={openInvitation}>
                            Open Invitation
                        </button>
                    </div>
                </div>
            </div>

            {separator('top')}

            <img className='triple-flower' src="/iib-and-ifa/images/shapes/triple-flower.png" alt="" />

            {ar_rum()}

            {separator('bot')}
            {imagePrefabTopBot("photos/groom&bride.png", "shapes/t3.png", "shapes/b3.png", "bride-photos")}
            {separator('top')}

            {groom_bride()}

            <Countdown />

            <RevenuePlace />

            <VirtualWedding />
            
        </div>
    )
}

const groom_bride = () => {
    return (
        <div className='groom-bride'>
            <div className='gb-title'>
                Groom & Bride
            </div>
            <div className='person'>
                <div className='person-name'>
                    Ibrahim Ali Ramdhani
                </div>
                <div className='person-desc'>
                    Putra kedua
                    <br />
                    Bapak Rudy Hartono (Alm) &
                    <br />
                    Ibu Oom Mustakomah
                </div>
            </div>
            <div className='and-sign'>
                and
            </div>
            <div className='person'>
                <div className='person-name'>
                    Nur Syarifah Wardani Yahya
                </div>
                <div className='person-desc'>
                    Putri ketiga
                    <br />
                    Bapak Yahya Ali (Alm) &
                    <br />
                    Ibu Titin Hartini Noer
                </div>
            </div>
        </div>
    )
}

const ar_rum = () => {
    return (
        <div className='ar-rum'>
            <div className='verse'>
                “And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”
            </div>
            <div className='surah'>
                ( QS. Ar-Rum 21 )
            </div>
        </div>
    )
}

const border = () => {
    return (
        <div className='border'>
            <div className='left-top'></div>
            <div className='left-bot'></div>
            <div className='top'></div>
            <div className='right'></div>
            <div className='bottom'></div>
        </div>
    )
}

const separator = (side) => {
    return (
        <div className={'separator-' + side}>

        </div>
    )
}

const imagePrefabBot = (image, frame, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={"/iib-and-ifa/images/" + image} alt="" />
            {/* <img className='imageFrame-bot' src={"/iib-and-ifa/images/" + frame} alt="" /> */}
        </div>
    )
}

const imagePrefabTop = (image, frame, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={"/iib-and-ifa/images/" + image} alt='' />
            {/* <img className='imageFrame-top' src={"/iib-and-ifa/images/" + frame} alt="" /> */}
        </div>
    )
}

const imagePrefabTopBot = (image, frameTop, frameBot, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={"/iib-and-ifa/images/" + image} alt='' />
            {/* <img className='imageFrame-top' src={"/iib-and-ifa/images/" + frameTop} alt="" />
            <img className='imageFrame-bot' src={"/iib-and-ifa/images/" + frameBot} alt="" /> */}
        </div>
    )
}
