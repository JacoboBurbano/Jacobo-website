import './Jacob-info.css'
import PerfilPicture from './images/perfil-image.jpg'
import { SocialNetworks } from './contact/SocialNetworks'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
import { NavBar } from './navbar/Navbar'
import { ContactUser } from './contact/Contact'
import { Footer } from './footer/Footer'
import { Experience } from './experience/Experience'
import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from './language/Language'
export const Info = () => {
  let [personalInfo, setPersonalInfo] = useState<string>('')
  let language = useContext(LanguageContext)
  useEffect(() => {
    language == 'es' ? setPersonalInfo('¡Hola! Soy Manuel Jacobo Burbano Jiménez, un apasionado autodidacta de 20 años que lleva más de dos años inmerso en el fascinante mundo del desarrollo de software y el aprendizaje automático (machine learning). Mi enfoque se centra en crear soluciones innovadoras mientras sigo expandiendo mis conocimientos y habilidades a través del aprendizaje constante. Siempre busco nuevos retos que me permitan crecer como profesional y contribuir con proyectos significativos.') : setPersonalInfo("Hello! I'm Manuel Jacobo Burbano Jiménez, a passionate 20-year-old self-taught developer with over two years immersed in the fascinating world of software development and machine learning. My focus is on creating innovative solutions while continually expanding my knowledge and skills through constant learning. I am always seeking new challenges that allow me to grow professionally and contribute to meaningful projects.")
  },[language])
  return (
    <>
      <NavBar/>
      <div className='separation'>
        <section className='section-info'>
          <div className='div-personal-info'>
            <div className='div-name-picture'>
              <img src={PerfilPicture} alt="" />
              <h2 style={{padding:'6px'}}>Manuel Jacobo Burbano Jimenez</h2>
            </div>
            <p>{personalInfo}</p>
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
    <section className='section-experience'>
        <Experience/>
    </section>
    <section className='section-contact'>
        <ContactUser/>
    </section>
    <Footer/>
    </>
  )
}
