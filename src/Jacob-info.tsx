import './Jacob-info.css'
import PerfilPicture from './images/perfil-image.jpg'
import { SocialNetworks } from './SocialNetworks'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
import { NavBar } from './navbar/Navbar'
export const Info = () => {
  return (
    <>
      <NavBar/>
      <section className='section-info'>
      <div className='div-personal-info'>
        <div className='div-name-picture'>
          <img src={PerfilPicture} alt="" />
          <h1>Manuel Jacobo Burbano Jimenez</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus nam minus facilis mollitia, nesciunt cumque veniam ad? Recusandae in dolorem atque! Cumque veniam esse reprehenderit eligendi facilis itaque, tempora porro?</p>
      </div>
      <><SocialNetworks/></>
    </section>
    <section className='section-projects'>
        <h1>Projects</h1>
        <Projects/>
    </section>
    <section className='section-skills'>
        <h1>Skills</h1>
        <Skills/> 
    </section>
    </>

  )
}
