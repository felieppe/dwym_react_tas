import styles from '../styles/components/UserDisplay.module.css'

import { useContext } from 'react';
import { UserContext } from '../pages/_app';
import Image from 'next/image';

function UserDisplay() {
    const { username } = useContext(UserContext);

    return (
        <div className={styles.container    }>
            <div className={styles.userDisplay}>
                <div className={styles.userDisplay__photo}>
                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={30} height={30}/>    
                </div>

                <div className={styles.userDisplay__username}>@{username}</div>
            </div>
        </div>
    )
}

export default UserDisplay;