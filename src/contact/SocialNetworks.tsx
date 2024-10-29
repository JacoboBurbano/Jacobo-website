import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Instagram from '../images/instagram.png'
import { InterfaceContact } from './interface-contact'
import { Contact } from './Contact'
import './SocialNetworks.css'
export const SocialNetworks = () => {
  const networks: InterfaceContact[] = [{img:Github, link:"https://github.com/JacoboBurbano"}, {img:Linkedin, link:"https://www.linkedin.com/in/manuel-jacobo-burbano-jimenez-392697271/"}, {img:Instagram, link:"https://www.instagram.com/jacobo_burb/"}]
    return (
      <div className='div-social-networks'>
        <ul className='list-social-networks'>
          <li>
            {networks.map(network => 
              <Contact img={network.img} link={network.link} />
            )}
          </li>
        </ul>
      </div>
    )
  }