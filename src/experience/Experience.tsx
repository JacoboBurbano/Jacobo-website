import { InterfacePlatformStyles } from "./interface-platform"
import './Experience.css'
import PlatziLogo from '../images/logo-platzi.webp'
import YoutubeLogo from '../images/logo-youtube.png'
import HackerRankLogo from '../images/logo-hackerrank.jpg'
import { NavBar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"
export const ExperiencePage = () => {
    return(
        <>
            <NavBar/>
            <div className="separation">
                <Experience/>
            </div>
            <div className="div-footer">
                <Footer/>
            </div>
        </>
    )
}
export const Experience = () => {
    const platforms: InterfacePlatformStyles[] = [{name: 'Platzi', content: 'La mayoría de mis cursos los realicé en Platzi, plataforma que sigo usando por su enfoque completo en el mundo del desarrollo. Opté por un ritmo de estudio lento pero sólido, complementando cada tema con más investigación y repasos continuos para afianzar bien los conocimientos.', img: PlatziLogo, background: '#2C2F33', color: 'white', links: [{alias: 'Mi perfil', link: 'https://platzi.com/p/MjBubble/'}]}, {name: 'Youtube', content: 'Me apoyé en YouTube, aplicando el mismo método en cursos de creadores como Midudev, Gentleman Programming, La Cocina del Código, Socratica, quienes fueron fundamentales en mi proceso.', img: YoutubeLogo, background: '#FFFFFF', color: 'black', links: [{alias: 'Midudev', link: 'https://www.youtube.com/@midudev'}, {alias: 'Gentleman Programming', link: 'https://www.youtube.com/@GentlemanProgramming'}, {alias: 'Socratica', link: 'https://www.youtube.com/@Socratica'}, {alias: 'La Cocina del Código', link: 'https://www.youtube.com/c/LaCocinadelC%C3%B3digo'}]}, {name: 'Hacker rank', content: 'HackerRank fue clave para mejorar mi lógica de programación, ya que sus ejercicios me permitieron comprender a fondo los conceptos y aplicarlos en la práctica.', img: HackerRankLogo, background: '#27B859', color: 'white', links: [{alias: 'Mi perfil', link: 'https://www.hackerrank.com/profile/jacoboburbano201'}]}]
    return (
        <div className="experience">
            <h1>Experience</h1>
            <div className="experience-platforms">
                {platforms.map(platform => 
                    <Platform platform={platform} />
                )}
            </div>
        </div>
    )
}
const Platform = ({platform} : {platform: InterfacePlatformStyles}) => {
    return (
        <div className="div-platform" style={{background: platform.background, color: platform.color}}>
            <img src={platform.img} alt="" className="img-logo"/>
            <h2>{platform.name}</h2>
            <big className="arrow-contact">⇣</big>
            <p className='content-platform'>{platform.content}</p>
            <hr />
            <div className="div-links">
                <ul className="list-links">
                    {platform.links.map(link => 
                        <li className="link">
                            <a href={link.link} target="_blank" style={{color: platform.color}}>{link.alias}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}