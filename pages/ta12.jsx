import styles from '../styles/TA12.module.css'

import { useState, useContext } from 'react';
import { UserContext } from './_app';
import UserDisplay from '../components/userDisplay';

function TA12() {
    const { setUsername } = useContext(UserContext);
    const [display, setDisplay] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let username = e.target[0].value;
        setUsername(username);
        setDisplay(true)
    }

    return (
        <div className="container">
            <div className={styles.ta12}>
                <h1 className={styles.ta12__title}>TA 12</h1>
                
                <form className={styles.ta12__form} onSubmit={handleSubmit}>
                    <input type="text" placeholder='@username' required/>
                    <input type="submit" value="Save" required/>
                </form>

                {display ? <UserDisplay /> : null}
            </div>
        </div>
    )
}

export default TA12;