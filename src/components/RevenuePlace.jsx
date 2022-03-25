import React from 'react'
import '../css/RevenuePlace.css'

export default function RevenuePlace() {
    const openLink = (url) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div>
            <div className='revenue'>
                <img className='revenue-frame-bot' src="/iib-and-ifa/images/shapes/b5.png" alt="" />

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
                    <div className='revenue-section'>
                        <div className='revenue-title'>
                            Resepsi
                        </div>
                        <div className='revenue-time'>
                            Minggu, 22 Mei 2022<br />
                            10.00 - 13.00 WIB ( 3 Sesi )
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
        </div>
    )
}
