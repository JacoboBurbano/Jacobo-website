import { createContext, useEffect, useState } from "react"
import { handleClick } from "../Utils"
import EnglishLogo from '../images/english-logo.png'
import SpanishLogo from '../images/spanish-logo.png'
import './Language.css'
export const LanguageContext = createContext(navigator.language.slice(0,2))
export const Language = ({children}: {children: JSX.Element}) => {
    let [isHidden, setHidden] = useState<boolean>(false)
    let [language, setLanguage] = useState<string>(navigator.language.slice(0, 2))
    useEffect(() => {
        setLanguage(isHidden ? 'es': 'en')
    }, [isHidden])
    return (
        <LanguageContext.Provider value={language}>
            <div className="separation">
            <div className="div-languages">
                <button className={`button-language ${isHidden ? 'hidden': 'not-hidden'}`} onClick={handleClick(isHidden, setHidden)}>
                    <img src={EnglishLogo} alt="en" />
                </button>
                <button className={`button-language ${!isHidden ? 'hidden': 'not-hidden'}`} onClick={handleClick(isHidden, setHidden)}>
                    <img src={SpanishLogo} alt="es" />
                </button>
            </div>
        </div>
        {children}
        </LanguageContext.Provider>
    )
}