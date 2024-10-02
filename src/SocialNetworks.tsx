import Github from './images/github.png'
import Linkedin from './images/linkedin.png'
import Instagram from './images/instagram.png'
export const SocialNetworks = () => {
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