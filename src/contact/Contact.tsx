import { SocialNetworks } from "./SocialNetworks"
import { NavBar } from "../navbar/Navbar"
import './Contact.css'
import { Footer } from "../footer/Footer"
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../language/Language"
import Gmail from '../images/gmail-not-hover.png'

export const Contact = ({img, link}: {img:string, link:string}) => {
    return (
        <a href={link} target="_blank">
            <img src={img}/>
        </a>
    )
}
export const ContactUser = () => {
    let [info, setInfo] = useState<string>('')
    const language = useContext(LanguageContext)
    useEffect(() => {
        language == 'es' ? setInfo('Me considero una persona adaptable y disciplinada, con una pasión por aprender y colaborar en equipo. Si deseas trabajar juntos o tienes alguna pregunta, ¡estaré encantado de ayudar!') : setInfo("I consider myself an adaptable and disciplined person, with a passion for learning and collaborating in a team. If you'd like to work together or have any questions, I'd be happy to help!")
    }, [language])
    return (
        <div className="div-contact">
            <h1 className="title-contact">{language == 'es' ? '¡Contáctame!':'Contact me!'}</h1>
            <p className="content-contact">{info}</p>
            <big className="arrow-contact">⇣</big>
            <div className="div-gmail">
                <button className="button-gmail">
                    <img src={Gmail} alt="" />
                </button>
            </div>
            <SocialNetworks/>
        </div>
    )
}
export const ContactPage = () => {
    return (
        <>
            <NavBar/>
            <ContactUser/>
            <Footer/>
        </>
    )
}