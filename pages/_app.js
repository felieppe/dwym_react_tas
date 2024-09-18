import '../styles/global.css'

import { createContext, useState } from 'react';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export const UserContext = createContext();
export const ThemeContext = createContext();
export const LanguageContext = createContext();

function App({ Component, pageProps }) {
  const [username, setUsername] = useState(null);
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('en');

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}

export default App;