import './Projects.css'
import { InterfaceProject } from './interface-project'
import MoviePlace from '../images/movie-place-capture.png'
import VirtualJukebox from '../images/vitual-jukebox-capture.png'
import FitPlace from '../images/fit-place-capture.png'
import { Tecnologies } from '../tecnologies/Tecnologies'
import { TypeTecnologies } from '../tecnologies/object-tecnologies'
const Project = ({title, img, link, tecnologies}: {title:string, img:string, link:string, tecnologies: TypeTecnologies[]}) => {
    return(
        <div className='project'>
            <div className="info-project">
                <div className='info-project--image front'>
                    <h1>{title}</h1>
                    <img src={img} alt="project-capture" />
                    <a href={link}></a>
                </div>
                <div className='info-project--description back'>
                    <div className='description'>
                        <h2>{title}</h2>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum repellat quis impedit, omnis voluptatibus perspiciatis consequuntur culpa eius quisquam quod velit eveniet commodi reiciendis earum tempora sed totam necessitatibus!</p>
                    </div>
                    <Tecnologies tecnologies={tecnologies}/>
                </div>
            </div>
        </div>
    )
}
export const Projects = () => {
    const projects: InterfaceProject[]  = [{title: 'Movies', img: MoviePlace, link: 'https://movie-place.vercel.app/', tecnologies: ['javascript', 'html', 'css']}, {title: 'Fit Place', img: FitPlace, link: 'https://fit-place-six.vercel.app/', tecnologies: ['typescript', 'html', 'css']}, {title: 'Virtual Jukebox', img: VirtualJukebox, link: 'https://music-history-frontend.vercel.app/', tecnologies: ['react', 'typescript', 'html', 'css', 'python', 'mySQL']}]
    return (
        <>
            {projects.map(project => 
                <Project title={project.title} img={project.img} link={project.link} tecnologies={project.tecnologies} key={project.title}/>
            )}
        </>
    )
}