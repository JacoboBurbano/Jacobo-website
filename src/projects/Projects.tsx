import './Projects.css'
import { InterfaceProjectStyles } from './interface-project'
import MoviePlace from '../images/movie-place-capture.png'
import VirtualJukebox from '../images/vitual-jukebox-capture.png'
import FitPlace from '../images/fit-place-capture.png'
import { Tecnologies } from '../tecnologies/Tecnologies'
import { TypeTecnologies } from '../tecnologies/object-tecnologies'
import { NavBar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../language/Language'
export const ProjectsPage = () => {
    return (
        <>
            <NavBar/>
            <div className='separation'>
                <Projects />
            </div>
            <Footer/>
        </>
    )
}
const Project = ({title, content,img, link, tecnologies, color, background}: {title:string, content:string, img:string, link:string, tecnologies: TypeTecnologies[], color:string, background:string}) => {
    return(
        <a href={link} style={{textDecoration:'none'}} target='_blank'>
            <div className='project'>
            <div className="info-project">
                <div className='info-project--image front' style={{color, background}}>
                    <img src={img} alt="project-capture" />
                </div>
                <div className='info-project--description back' style={{width: '100%', background}}>
                    <div className='description' style={{color, background}}>
                        <h2>{title}</h2>
                        <hr />
                        <p>{content}</p>
                    </div>
                    <ul className='tecnologies-list__project'>
                        <Tecnologies tecnologies={tecnologies}/>
                    </ul>
                </div>
            </div>
            </div>
        </a>
    )
}
export const Projects = () => {
    let [projects, setProjects] = useState<InterfaceProjectStyles[]>([])
    const language = useContext(LanguageContext)
    useEffect(() => {
        language == 'es' ? setProjects( [{title: 'Movies', img: MoviePlace, link: 'https://movie-place.vercel.app/', tecnologies: ['javascript', 'html', 'css'], color: '#FFC107', background: '#FFF9E6', content:'Este proyecto te permite explorar una amplia variedad de películas, organizadas de manera intuitiva por género. Además, los usuarios pueden consultar la calificación de cada película, lo que facilita la selección de las mejores opciones según sus intereses. El sistema está diseñado para ofrecer una experiencia fluida y visualmente atractiva, ayudando a los cinéfilos a descubrir nuevas películas de manera rápida y eficiente.'}, {title: 'Fit Place', content: 'Esta página web está diseñada para aquellos que buscan mejorar su bienestar físico. Ofrece una variedad de rutinas de ejercicios adaptadas a diferentes niveles, junto con la posibilidad de monitorear cuántas calorías están consumiendo o quemando. Además, destaca la importancia de una alimentación balanceada para mantener una vida saludable. Es un recurso integral para quienes desean adoptar un estilo de vida más activo y equilibrado.', img: FitPlace, link: 'https://fit-place-six.vercel.app/', tecnologies: ['typescript', 'html', 'css'], color: '#FFCC23', background: '#24110C'}, {title: 'Virtual Jukebox', content: 'Esta página web es una enciclopedia musical interactiva donde los usuarios pueden descubrir canciones de sus artistas favoritos, conocer la historia detrás de cada uno, e incluso explorar artistas relacionados. Lo más innovador es que una IA se encarga de agregar y gestionar nuevos artistas, manteniendo la base de datos siempre actualizada. El backend de la plataforma está construido con Django, garantizando robustez y escalabilidad, mientras que el frontend, desarrollado con React, ofrece una experiencia de usuario dinámica y atractiva.', img: VirtualJukebox, link: 'https://music-history-frontend.vercel.app/', tecnologies: ['react', 'typescript', 'html', 'css', 'python', 'mySQL'], color:'#B8DDFB', background: '#4B7EFE'}]): setProjects( [{title: 'Movies', img: MoviePlace, link: 'https://movie-place.vercel.app/', tecnologies: ['javascript', 'html', 'css'], color: '#FFC107', background: '#FFF9E6', content:'This project allows you to explore a wide variety of movies, intuitively organized by genre. Additionally, users can view the rating of each movie, making it easier to choose the best options based on their interests. The system is designed to provide a smooth and visually appealing experience, helping movie enthusiasts discover new films quickly and efficiently.'}, {title: 'Fit Place', content: 'This website is designed for those seeking to improve their physical well-being. It offers a variety of exercise routines tailored to different levels, along with the ability to monitor how many calories they are consuming or burning. Additionally, it highlights the importance of a balanced diet for maintaining a healthy lifestyle. It is a comprehensive resource for those who want to adopt a more active and balanced way of life.', img: FitPlace, link: 'https://fit-place-six.vercel.app/', tecnologies: ['typescript', 'html', 'css'], color: '#FFCC23', background: '#24110C'}, {title: 'Virtual Jukebox', content: 'This website is an interactive music encyclopedia where users can discover songs by their favorite artists, learn the story behind each one, and even explore related artists. The most innovative feature is an AI that adds and manages new artists, keeping the database constantly up-to-date. The platform’s backend is built with Django, ensuring robustness and scalability, while the frontend, developed with React, provides a dynamic and engaging user experience.', img: VirtualJukebox, link: 'https://music-history-frontend.vercel.app/', tecnologies: ['react', 'typescript', 'html', 'css', 'python', 'mySQL'], color:'#B8DDFB', background: '#4B7EFE'}])
    }, [language])
    return (
        <>
            {projects.map(project => 
                <Project title={project.title} content={project.content} img={project.img} link={project.link} tecnologies={project.tecnologies} color={project.color} background={project.background} key={project.title}/>
            )}
        </>
    )
}