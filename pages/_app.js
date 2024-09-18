import '../styles/global.css'

import { createContext, useState } from 'react';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

export const UserContext = createContext();

function App({ Component, pageProps }) {
  const [username, setUsername] = useState(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default App;