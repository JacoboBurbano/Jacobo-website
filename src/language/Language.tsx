import { createContext, useState } from "react"
import { handleClick } from "../Utils"
import './Language.css'
export const LanguageContext = createContext(navigator.language.slice(0,2))
export const Language = () => {
    let [isHidden, setHidden] = useState<boolean>(false)
    return (
        <LanguageContext.Provider value={navigator.language.slice(0,2)}>
            <div className="separation">
            <div className="div-languages">
                <button className={`button-language ${isHidden ? 'hidden': 'not-hidden'}`} onClick={handleClick(isHidden, setHidden)}>
                    <p>es</p>
                </button>
                <button className={`button-language ${!isHidden ? 'hidden': 'not-hidden'}`} onClick={handleClick(isHidden, setHidden)}>
                    <p>en</p>
                </button>
            </div>
        </div>
        </LanguageContext.Provider>
    )
}