import styles from '../styles/TA5.module.css'

import { useState } from 'react';

function TA5() {
    const [state, setState] = useState(true);

    return (
        <>
            <div className="container">
                <div className={styles.ta5}>
                    <h1>TA5</h1>
                    <p className={styles.ta5__text} style={{display: state ? "block" : "none"}}>This text can disappear if you click the button</p>
                    <button className={styles.ta5__button} onClick={() => setState(!state)}>{state ? "Hide" : "Show"}</button>
                </div>
            </div>
        </>
    )
}

export default TA5;