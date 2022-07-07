import React, { createContext, useState } from 'react'
import translate from '../services/translateService'

export const context = createContext()

export default function LanguagesProvider({ children }) {
    const [langSource, setLangSource] = useState("es");
    const [langTarget, setLangTarget] = useState("en");
    const [userInput, setUserInput] = useState({ input:'', translated:'' })

    const selectTargetLanguage = (lang) => {
      setLangTarget(lang);
    };
    
    const selectSourceLanguage = (lang) => {
      setLangSource(lang);
    };

    const setInput = (input) => {
      translate(input, langSource, langTarget)
        .then(translated => setUserInput({input, translated}))
        .catch(err => console.log({ err }))
    }

    return (
        <context.Provider
          value={{selectTargetLanguage, selectSourceLanguage,langSource, langTarget, setInput, userInput }}>
          {children}
        </context.Provider>
      )
    
}
