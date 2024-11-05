import { SocialNetworks } from "./SocialNetworks"
import { NavBar } from "../navbar/Navbar"
import './Contact.css'
import { Footer } from "../footer/Footer"

export const Contact = ({img, link}: {img:string, link:string}) => {
    return (
        <a href={link} target="_blank">
            <img src={img}/>
        </a>
    )
}
export const ContactUser = () => {
    return (
        <div className="div-contact">
            <h1 className="title-contact">Contact me!</h1>
            <p className="content-contact">Me considero una persona adaptable y disciplinada, con una pasión por aprender y colaborar en equipo. Si deseas trabajar juntos o tienes alguna pregunta, ¡estaré encantado de ayudar!</p>
            <big className="arrow-contact">⇣</big>
            <SocialNetworks/>
        </div>
    )
}
export const ContactPage = () => {
    return (
        <>
            <NavBar/>
            <div className="separation">
                <ContactUser/>
            </div>
            <Footer/>
        </>
    )
}