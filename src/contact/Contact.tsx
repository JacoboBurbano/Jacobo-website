import { SocialNetworks } from "./SocialNetworks"
import './Contact.css'

export const Contact = ({img, link}: {img:string, link:string}) => {
    return (
        <a href={link}>
            <img src={img}/>
        </a>
    )
}
export const ContactPage = () => {
    return (
        <div className="div-contact">
            <h3 className="title-contact">Contact me!</h3>
            <p className="content-contact">Me considero una persona adaptable y disciplinada, con una pasión por aprender y colaborar en equipo. Si deseas trabajar juntos o tienes alguna pregunta, ¡estaré encantado de ayudar!</p>
            <big className="arrow-contact">⇣</big>
            <SocialNetworks/>
        </div>
    )
}