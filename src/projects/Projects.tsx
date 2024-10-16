import './Projects.css'
import { InterfaceProjectStyles } from './interface-project'
import MoviePlace from '../images/movie-place-capture.png'
import VirtualJukebox from '../images/vitual-jukebox-capture.png'
import FitPlace from '../images/fit-place-capture.png'
import { Tecnologies } from '../tecnologies/Tecnologies'
import { TypeTecnologies } from '../tecnologies/object-tecnologies'
const Project = ({title, img, link, tecnologies, color, background}: {title:string, img:string, link:string, tecnologies: TypeTecnologies[], color:string, background:string}) => {
    return(
        <div className='project'>
            <div className="info-project">
                <div className='info-project--image front' style={{color, background}}>
                    <h1>{title}</h1>
                    <img src={img} alt="project-capture" />
                    <a href={link}></a>
                </div>
                <div className='info-project--description back' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', width: '100%'}}>
                    <div className='description' style={{color, background}}>
                        <h2>{title}</h2>
                        <hr />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum repellat quis impedit, omnis voluptatibus perspiciatis consequuntur culpa eius quisquam quod velit eveniet commodi reiciendis earum tempora sed totam necessitatibus!</p>
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
    const projects: InterfaceProjectStyles[]  = [{title: 'Movies', img: MoviePlace, link: 'https://movie-place.vercel.app/', tecnologies: ['javascript', 'html', 'css'], color: '#FFC107', background: '#FFF9E6'}, {title: 'Fit Place', img: FitPlace, link: 'https://fit-place-six.vercel.app/', tecnologies: ['typescript', 'html', 'css'], color: '#FFCC23', background: '#24110C'}, {title: 'Virtual Jukebox', img: VirtualJukebox, link: 'https://music-history-frontend.vercel.app/', tecnologies: ['react', 'typescript', 'html', 'css', 'python', 'mySQL'], color:'#B8DDFB', background: '#4B7EFE'}]
    return (
        <>
            {projects.map(project => 
                <Project title={project.title} img={project.img} link={project.link} tecnologies={project.tecnologies} color={project.color} background={project.background} key={project.title}/>
            )}
        </>
    )
}