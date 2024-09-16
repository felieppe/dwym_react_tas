import styles from '../styles/TA4.module.css'

import { useState } from 'react';

function TA4() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="container">
                <div className={styles.ta4}>
                    <h1>TA 4</h1>

                    <p className={styles.ta4__counter}>Counter: {counter}</p>
                    <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
                    <button onClick={() => { setCounter(counter - 1) }}>Decrement</button>
                </div>    
            </div>
        </>
    )
}

export default TA4;