import React from 'react'

export default function Place({place, last}) {
    return (
        <div className='place-container'>
            <section className='place'>
                <img className='location-picture' src={place.imageUrl} alt=''/>
                <div className='place-text'>
                    <div className='place-coordinates'>
                        <p className='place-country'><i className="fa-solid fa-location-dot red"></i>{place.location.toUpperCase()}</p>
                        <a className='place-link' href='.'>View on Google Maps</a>
                    </div>
                    <p className='place-name'>{place.title}</p>
                    <p className='place-date'>{place.startDate} - {place.endDate}</p>
                    <p className='description'>{place.description}</p>
                </div>
            </section>
            {!last && <hr/>}
        </div>
    )
}