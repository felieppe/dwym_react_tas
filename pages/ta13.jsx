import styles from '../styles/TA13.module.css'

import { useState, useContext } from 'react';
import { UserContext } from './_app';
import UserDisplay from '../components/userDisplay';

function TA13() {
    const { username, setUsername } = useContext(UserContext);
    const [display, setDisplay] = useState(false);

    const handleChange = (e) => {
        setUsername(e.target.value);
        setDisplay(true);
    }

    return (
        <div className="container">
            <div className={styles.ta13}>
                <h1 className={styles.ta13__title}>TA 13</h1>
                
                <form className={styles.ta13__form}>
                    <input type="text" placeholder='@username' onChange={handleChange} required/>
                </form>

                {display && username != '' ? <UserDisplay /> : null}
            </div>
        </div>
    )
}

export default TA13;