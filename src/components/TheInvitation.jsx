import React, { useEffect } from 'react'
import '../css/TheInvitation.css'
import '../css/FirstLoadPopUp.css'
import { useScrollLock } from '../libs/useScrollLock'
import Countdown from './Countdown';
import RevenuePlace from './RevenuePlace';

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
                <img className='imageContained' src="/iib-and-ifa/images/photos/Test.png" alt='' />
                <div className='imageOverlay'></div>

                <div className='text'>
                    <div className='title'>The Wedding</div>
                    <div className='name'>Habib & Anggi</div>
                    <div className='date'>
                        22 . 5 . 2022
                    </div>
                </div>

                <img className='imageFrame-bot' src="/iib-and-ifa/images/shapes/b1.png" alt="" />

                {border()}

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

            <img className='triple-flower' src="/iib-and-ifa/images/shapes/triple-flower.png" alt="" />

            {ar_rum()}

            {imagePrefabTopBot("photos/test3.png", "shapes/t3.png", "shapes/b3.png", "bride-photos")}

            {groom_bride()}

            <Countdown />

            <RevenuePlace />
            
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
                    Nur Muhammad Husnul Habib Yahya
                </div>
                <div className='person-desc'>
                    Putra ke empat
                    <br />
                    Bapak Yahya Ali (Alm) &
                    <br />
                    Ibu Titin Hartiti Noer
                </div>
            </div>
            <div className='and-sign'>
                -&-
            </div>
            <div className='person'>
                <div className='person-name'>
                    Laksmita Anggarani
                </div>
                <div className='person-desc'>
                    Putri ke dua
                    <br />
                    Bapak Teguh Bagus &
                    <br />
                    Nyonya Teguh Bagus
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

const imagePrefabBot = (image, frame, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={"/iib-and-ifa/images/" + image} alt="" />
            <img className='imageFrame-bot' src={"/iib-and-ifa/images/" + frame} alt="" />
        </div>
    )
}

const imagePrefabTop = (image, frame, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={"/iib-and-ifa/images/" + image} alt='' />
            <img className='imageFrame-top' src={"/iib-and-ifa/images/" + frame} alt="" />
        </div>
    )
}

const imagePrefabTopBot = (image, frameTop, frameBot, extraTag) => {
    return (
        <div className={"imageContainer " + extraTag}>
            <img className='imageContained' src={"/iib-and-ifa/images/" + image} alt='' />
            <img className='imageFrame-top' src={"/iib-and-ifa/images/" + frameTop} alt="" />
            <img className='imageFrame-bot' src={"/iib-and-ifa/images/" + frameBot} alt="" />
        </div>
    )
}
