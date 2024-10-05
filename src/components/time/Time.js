import React, { useEffect, useState } from 'react'
import './Time.css'

const Time = () => {
    let [currentTime, setCurrentTime] = useState(null)
    let now = new Date()
    now = now.toDateString().slice(0, 10)
    let months = { 1: "January", 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December' }

    const updateTime = () => {
        let date = new Date()
        let minutes = date.getMinutes()
        let hours = date.getHours()
        let month = date.getMonth()
        if (hours < 10) hours = '0' + hours
        if (minutes < 10) minutes = '0' + minutes

        date = hours + ':' + minutes
        console.log(minutes, hours, months[month])

        setCurrentTime(date)
    }
    // useEffect(() => {
    //     updateTime()
    // })

    setTimeout(updateTime, 10000)
    return (
        <div className='time-card'>
            <spna>{currentTime}</spna>
            <span className='time-span'>
                {now}
            </span>
        </div>
    )
}

export default Time
