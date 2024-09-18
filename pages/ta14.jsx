import styles from '../styles/TA14.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext } from './_app';
import ThemeDisplay from '@/components/themeDisplay';

function TA14() {
    const { theme, setTheme } = useContext(ThemeContext);

    function handleLightClick() {
        setTheme('light');
    }

    function handleDarkClick() {
        setTheme('dark');
    }

    return (
        <div className="container">
            <div className={styles.ta14}>
                <h1 className={styles.ta14__title}>TA 14</h1>

                <div className={styles.ta14__options}>
                    <button className={theme == "light" ? `${styles.options__light} ${styles.activated}` : styles.options__light} onClick={handleLightClick}>
                        <FontAwesomeIcon icon={faSun} />
                        LIGHT
                    </button>
                    <button className={theme == "dark" ? `${styles.options__dark} ${styles.activated}` : styles.options__dark} onClick={handleDarkClick}>
                        <FontAwesomeIcon icon={faMoon} />
                        DARK
                    </button>
                </div>

                <ThemeDisplay />
            </div>
        </div>
    )
}

export default TA14;