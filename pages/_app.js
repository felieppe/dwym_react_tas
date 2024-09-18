import '../styles/global.css'

import { createContext, useState } from 'react';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export const UserContext = createContext();
export const ThemeContext = createContext();

function App({ Component, pageProps }) {
  const [username, setUsername] = useState(null);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={{ username, setUsername }}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;