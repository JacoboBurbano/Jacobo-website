import './Projects.css'
import { InterfaceProject } from './interface-project'
import MoviePlace from '../images/movie-place-capture.png'
import VirtualJukebox from '../images/vitual-jukebox-capture.png'
import FitPlace from '../images/fit-place-capture.png'
const Project = ({title, img, link}: {title:string, img:string, link:string}) => {
    return(
        <div className='project'>
            <div className="info-project">
                <div className='info-project--image'>
                    <h1>{title}</h1>
                    <img src={img} alt="project-capture" />
                    <a href={link}></a>
                </div>
                <div className='info-project--description'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum repellat quis impedit, omnis voluptatibus perspiciatis consequuntur culpa eius quisquam quod velit eveniet commodi reiciendis earum tempora sed totam necessitatibus!</p>
                </div>
            </div>
        </div>
    )
}
export const Projects = () => {
    const projects: InterfaceProject[]  = [{title: 'Movies', img: MoviePlace, link: 'https://movie-place.vercel.app/'}, {title: 'Fit Place', img: FitPlace, link: 'https://fit-place-six.vercel.app/'}, {title: 'Virtual Jukebox', img: VirtualJukebox, link: 'https://music-history-frontend.vercel.app/'}]
    return (
        <>
            {projects.map(project => 
                <Project title={project.title} img={project.img} link={project.link} />
            )}
        </>
    )
}