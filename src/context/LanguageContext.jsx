import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
    const [lang, setLang] = useState("KA");

  return (
    <LanguageContext.Provider value={{lang, setLang}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider