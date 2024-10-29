import './Jacob-info.css'
import PerfilPicture from './images/perfil-image.jpg'
import { SocialNetworks } from './contact/SocialNetworks'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
import { NavBar } from './navbar/Navbar'
import { ContactPage } from './contact/Contact'
export const Info = () => {
  return (
    <>
      <NavBar/>
      <div className='separation'>
        <section className='section-info'>
          <div className='div-personal-info'>
            <div className='div-name-picture'>
              <img src={PerfilPicture} alt="" />
              <h1>Manuel Jacobo Burbano Jimenez</h1>
            </div>
            <p>¡Hola! Soy Manuel Jacobo Burbano Jiménez, un apasionado autodidacta de 20 años que lleva más de dos años inmerso en el fascinante mundo del desarrollo de software y el aprendizaje automático (machine learning). Mi enfoque se centra en crear soluciones innovadoras mientras sigo expandiendo mis conocimientos y habilidades a través del aprendizaje constante. Siempre busco nuevos retos que me permitan crecer como profesional y contribuir con proyectos significativos.</p>
          </div>
          <SocialNetworks/>
        </section>
      </div>
    <section className='section-projects'>
        <h1>Projects</h1>
        <Projects/>
    </section>
    <section className='section-skills'>
        <h1>Skills</h1>
        <Skills/> 
    </section>
    <section className='section-contact'>
        <ContactPage/>
    </section>
    </>

  )
}
