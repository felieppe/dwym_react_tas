import styles from '../styles/TA3.module.css'

import { useState } from 'react';

function TA3() {
    const [text, setText] = useState('');

    return (
        <>
            <div className={styles.container}>
                <div className={styles.ta3}>
                    <h1>TA 3</h1>
                    <form className={styles.ta3__form}>
                        <input type="text" placeholder="Write here" onChange={(e) => { setText(e.target.value) }}/> <br /><br />
                        <textarea  value={text} placeholder='This textarea will automatically changes when you write some text!' readOnly/>    
                    </form>
                </div>    
            </div>    
        </>
    )
}

export default TA3;