import React, { useEffect, useState } from 'react'
import '../time/Time.css'
import './Greeting.css'

const Greeting = () => {
    const [headText, setHeadText] = useState()
    const [currentGreeting, setCurrentGreeting] = useState('')
    const [isMade, setIsMade] = useState(false)
    let d = new Date()
    let h = d.setHours()

    // if (h > 4 && h < 6) {
    //     setHeadText('Good Evening')
    // } else if (h > 0 && h < 12) {
    //     setHeadText('Good Morning')
    // } else {
    //     setHeadText('Good Night')
    // }
    useEffect(() => {
        if (h > 16 && h < 20) {
            setHeadText('Good Evening')
        } else if (h > 0 && h < 12) {
            setHeadText('Good Morning')
        } else {
            setHeadText('Good Night')
        }
    }, [h])
    function handleSubmit(e) {
        e.preventDefault()
        console.log(currentGreeting)
        setIsMade(true)
    }
    return (
        <div className='time-card greeting'>
            <div>{headText}
                {/* {currentGreeting} */}
            </div>
            {!isMade ? <form onSubmit={handleSubmit}>
                <input type='text' value={currentGreeting} onChange={(e) => setCurrentGreeting(e.target.value)} />
                {/* <button type='submit' onClick={handleSubmit} >submit</button> */}
            </form> : <span>{currentGreeting}</span>}
        </div>
    )
}

export default Greeting
