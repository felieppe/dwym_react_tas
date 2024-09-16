import styles from '../styles/TA11.module.css'

import { useEffect, useState } from 'react';

function TA11() {
    const [stopwatch, setStopwatch] = useState({hours: "00", minutes: "00", seconds: "00"});
    const [started, setStarted] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const handleStart = () => {
        setStarted(true);
    }

    const handleReset = () => {
        setStopwatch({hours: "00", minutes: "00", seconds: "00"});
        setStarted(false);
        clearInterval(intervalId);
        setIntervalId(null);
    }

    // use intervalid to update stopwatch by 1 sec every second
    useEffect(() => {
        if (started) {
            const id = setInterval(() => {
                let hours = parseInt(stopwatch.hours);
                let minutes = parseInt(stopwatch.minutes);
                let seconds = parseInt(stopwatch.seconds);

                if (seconds === 59) {
                    seconds = 0;
                    if (minutes === 59) {
                        minutes = 0;
                        hours++;
                    } else {
                        minutes++;
                    }
                } else {
                    seconds++;
                }

                setStopwatch({
                    hours: hours < 10 ? "0" + hours : hours.toString(),
                    minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
                    seconds: seconds < 10 ? "0" + seconds : seconds.toString()
                });
            }, 1000);

            setIntervalId(id);

            document.title = `Stopwatch ${stopwatch.hours}:${stopwatch.minutes}:${stopwatch.seconds}`;
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [stopwatch, started]);

    return (
        <>
            <div className="container">
                <div className={styles.ta11}>
                    <h1>TA 11</h1>

                    <div className={styles.ta11__stopwatch}>
                        <h2>Stopwatch</h2>
                        <div className={styles.ta11__stopwatch__timer}>
                            {stopwatch.hours} : {stopwatch.minutes} : {stopwatch.seconds}
                        </div>

                        <div className={styles.ta11__stopwatch__buttons}>
                            <button onClick={handleStart}>Start</button>
                            {started ? <button onClick={handleReset}>Reset</button> : null }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TA11;