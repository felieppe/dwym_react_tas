import styles from '../styles/Home.module.css'

import { useState } from 'react';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.homepage}>
                <h1 className={styles.homepage__title}>Index of React TAs</h1>

                <ol className={styles.homepage__index}></ol>
            </div>
        </div>
    )
}

export default Home;    