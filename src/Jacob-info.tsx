import './Jacob-info.css'
import PerfilPicture from './images/perfil-image.jpg'
import Github from './images/github.png'
import Linkedin from './images/linkedin.png'
import Instagram from './images/instagram.png'

export const Info = () => {

  return (
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
  )
}
const SocialNetworks = () => {
  return (
    <div className='div-social-networks'>
      <ul className='list-social-networks'>
        <li>
          <a href="https://github.com/JacoboBurbano">
            <img src={Github} alt="github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/manuel-jacobo-burbano-jimenez-392697271/">
            <img src={Linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jacobo_burb/">
            <img src={Instagram} alt="instagram" />
          </a>
        </li>
      </ul>
    </div>
  )
}
