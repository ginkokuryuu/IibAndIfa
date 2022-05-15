import React, { useEffect } from 'react'
import '../css/RevenuePlace.css'

export default function RevenuePlace() {
    const openLink = (url) => {
        window.open(url, '_blank').focus();
    }

    useEffect(() => {
    }, [])

    return (
        <div className='dark-bg'>
            {separator('top')}
            <div className='revenue'>
                <div className='revenue-content'>
                    <div className='revenue-section'>
                        <div className='revenue-title'>
                            Akad Nikah
                        </div>
                        <div className='revenue-time'>
                            Minggu, 22 Mei 2022<br />
                            07.00 WIB - Selesai
                        </div>
                    </div>
                    <div className='revenue-place'>
                        Rumah Nyonya Yahya Ali, Jl. Walikota Gatot, Gang 15, No.10, Kanigaran, Kota Probolinggo, 67213
                    </div>
                    <div className='revenue-link' onClick={() => openLink("https://goo.gl/maps/9XnGzX3c6uEfmtQy7")}>
                        <img src="/iib-and-ifa/images/location-icon.png" alt="" />
                        <div>View Location</div>
                    </div>
                </div>
            </div>
            <div className='revenue'>
                <div className='revenue-content'>
                    <div className='revenue-section'>
                        <div className='revenue-title'>
                            Resepsi
                        </div>
                        <div className='revenue-time'>
                            Minggu, 22 Mei 2022<br />
                            {getSession()}
                            {/* 13.00 - 16.00 WIB ( 3 Sesi ) */}
                        </div>
                    </div>
                    <div className='revenue-place'>
                        Simposium Coffee, Jl. Dr. Moch Saleh No.12, Sukabumi, Kec. Mayangan, Kota Probolinggo, Jawa Timur 67219
                    </div>
                    <div className='revenue-link' onClick={() => openLink("https://maps.app.goo.gl/zUySF6CTJdJHc3JZ6")}>
                        <img src="/iib-and-ifa/images/location-icon.png" alt="" />
                        <div>View Location</div>
                    </div>
                </div>
            </div>
            {separator('bot')}
        </div>
    )
}

const separator = (side) => {
    return (
        <div className={'separator-' + side}>

        </div>
    )
}

const getSession = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    var session = params.type; // "some_value"

    if(session == null){
        return "13.00 - 14.00";
    }

    var start = session - 1 + 13;
    var end = start + 1;

    return (
        start + ".00 - " + end + ".00"
    )
}