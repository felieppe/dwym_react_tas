import styles from '../styles/Home.module.css'

import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.homepage}>
                <h1 className={styles.homepage__title}>Index of React TAs</h1>

                <ol className={styles.homepage__index}>
                    <li><Link href="/ta3">TA 3</Link></li>
                    <li><Link href="/ta4">TA 4</Link></li>
                    <li><Link href="/ta5">TA 5</Link></li>
                </ol>
            </div>
        </div>
    )
}

export default Home;    