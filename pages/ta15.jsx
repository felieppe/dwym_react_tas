import styles from '../styles/TA15.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemeContext, LanguageContext } from './_app';
import ThemeDisplay from '@/components/themeDisplay';

function TA15() {
    const { theme, setTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);

    function handleLightClick() {
        setTheme('light');
    }

    function handleDarkClick() {
        setTheme('dark');
    }

    function handleLanguageChange(e) {
        setLanguage(e.target.value);
    }

    return (
        <div className="container">
            <div className={styles.ta15}>
                <h1 className={styles.ta15__title}>TA 15</h1>

                <div className={styles.ta15__options}>
                    <button className={theme == "light" ? `${styles.options__light} ${styles.activated}` : styles.options__light} onClick={handleLightClick}>
                        <FontAwesomeIcon icon={faSun} />
                        {language == "en" ? "LIGHT" : language == "es" ? "CLARO" : null}
                    </button>
                    <button className={theme == "dark" ? `${styles.options__dark} ${styles.activated}` : styles.options__dark} onClick={handleDarkClick}>
                        <FontAwesomeIcon icon={faMoon} />
                        {language == "en" ? "DARK" : language == "es" ? "OSCURO" : null}
                    </button>
                </div>

                <div className={styles.ta15__language}>
                    <select name="lang" id="lang" value={language} onChange={handleLanguageChange}>
                        <option value="en">{language == "en" ? "English" : language == "es" ? "Inglés" : null}</option>
                        <option value="es">{language == "en" ? "Spanish" : language == "es" ? "Español" : null}</option>
                    </select>
                </div>

                <ThemeDisplay />
            </div>
        </div>
    )
}

export default TA15;