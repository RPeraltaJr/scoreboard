import React, { useState, useEffect } from 'react'

export default function Stopwatch() {

    const [ isRunning, setIsRunning ] = useState(false);
    const [ seconds, setSeconds ] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isRunning && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, seconds]);

    const handleReset = () => {
        setSeconds(0);
        setIsRunning(false);
    }

    const handleStopwatch = () => {
        setIsRunning(!isRunning);
    }

    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{ seconds }</span>
            <button onClick={handleStopwatch}>
                { isRunning ? 'Stop' : 'Start' }
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
