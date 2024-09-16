import styles from '../styles/TA9.module.css'

import { useEffect, useState } from 'react';

function TA9() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    }, [counter]);

    return (
        <>
            <div className="container">
                <div className={styles.ta9}>
                    <h1>TA 9</h1>

                    <p className={styles.ta9__counter}>Counter: {counter}</p>
                    <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
                    <button onClick={() => { setCounter(counter - 1) }}>Decrement</button>
                </div>    
            </div>
        </>
    )
}

export default TA9;