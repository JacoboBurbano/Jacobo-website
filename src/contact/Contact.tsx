import { SocialNetworks } from "./SocialNetworks"
import { NavBar } from "../navbar/Navbar"
import './Contact.css'
import { Footer } from "../footer/Footer"
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../language/Language"
import GmailNotHover from '../images/gmail-not-hover.png'
import GmailHover from '../images/gmail-hover.png'

export const Contact = ({img, link}: {img:string, link:string}) => {
    return (
        <a href={link} target="_blank">
            <img src={img}/>
        </a>
    )
}
export const ContactUser = () => {
    let [hover, setHover] = useState<{image: string, classProperty: string}>({image: GmailNotHover, classProperty: 'not-hover'})
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
                <a href="mailto:jacoboburbano2004@gmail.com">
                    <button className={`button-gmail ${hover.classProperty}`} onMouseOver={() => {
                        setHover({image: GmailHover, classProperty: 'hover'})
                    }} onMouseLeave={() => {
                        setHover({image: GmailNotHover, classProperty: 'not-hover'})
                    }}>
                        <img src={hover.image} alt="" className="img-gmail"/>
                    </button>
                </a>
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