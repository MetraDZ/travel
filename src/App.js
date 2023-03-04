import React from 'react'
import Navbar from './components/Navbar'
import Place from './components/Place'
import data from './data'

export default function App() {
    let index = 0;
    let last = false;
    const place_elements = data.map(place => {
        index++;
        if (index === data.length){
            last = true
        }
        return <Place place={place} last={last}/>
    })

    return (
        <div className='main-pad'>
            <Navbar />
            <div className='places-container'>
                {place_elements}
            </div>
        </div>
    )
}