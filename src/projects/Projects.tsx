import './Projects.css'
import { InterfaceProjectStyles } from './interface-project'
import MoviePlace from '../images/movie-place-capture.png'
import VirtualJukebox from '../images/vitual-jukebox-capture.png'
import FitPlace from '../images/fit-place-capture.png'
import { Tecnologies } from '../tecnologies/Tecnologies'
import { TypeTecnologies } from '../tecnologies/object-tecnologies'
import { NavBar } from '../navbar/Navbar'
import { Footer } from '../footer/Footer'
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
        <div className='project'>
            <div className="info-project">
                <div className='info-project--image front' style={{color, background}}>
                    <h2>{title}</h2>
                    <img src={img} alt="project-capture" />
                    <a href={link}></a>
                </div>
                <div className='info-project--description back' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', width: '100%'}}>
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
    )
}
export const Projects = () => {
    const projects: InterfaceProjectStyles[]  = [{title: 'Movies', img: MoviePlace, link: 'https://movie-place.vercel.app/', tecnologies: ['javascript', 'html', 'css'], color: '#FFC107', background: '#FFF9E6', content:'Este proyecto te permite explorar una amplia variedad de películas, organizadas de manera intuitiva por género. Además, los usuarios pueden consultar la calificación de cada película, lo que facilita la selección de las mejores opciones según sus intereses. El sistema está diseñado para ofrecer una experiencia fluida y visualmente atractiva, ayudando a los cinéfilos a descubrir nuevas películas de manera rápida y eficiente.'}, {title: 'Fit Place', content: 'Esta página web está diseñada para aquellos que buscan mejorar su bienestar físico. Ofrece una variedad de rutinas de ejercicios adaptadas a diferentes niveles, junto con la posibilidad de monitorear cuántas calorías están consumiendo o quemando. Además, destaca la importancia de una alimentación balanceada para mantener una vida saludable. Es un recurso integral para quienes desean adoptar un estilo de vida más activo y equilibrado.', img: FitPlace, link: 'https://fit-place-six.vercel.app/', tecnologies: ['typescript', 'html', 'css'], color: '#FFCC23', background: '#24110C'}, {title: 'Virtual Jukebox', content: 'Esta página web es una enciclopedia musical interactiva donde los usuarios pueden descubrir canciones de sus artistas favoritos, conocer la historia detrás de cada uno, e incluso explorar artistas relacionados. Lo más innovador es que una IA se encarga de agregar y gestionar nuevos artistas, manteniendo la base de datos siempre actualizada. El backend de la plataforma está construido con Django, garantizando robustez y escalabilidad, mientras que el frontend, desarrollado con React, ofrece una experiencia de usuario dinámica y atractiva.', img: VirtualJukebox, link: 'https://music-history-frontend.vercel.app/', tecnologies: ['react', 'typescript', 'html', 'css', 'python', 'mySQL'], color:'#B8DDFB', background: '#4B7EFE'}]
    return (
        <>
            {projects.map(project => 
                <Project title={project.title} content={project.content} img={project.img} link={project.link} tecnologies={project.tecnologies} color={project.color} background={project.background} key={project.title}/>
            )}
        </>
    )
}