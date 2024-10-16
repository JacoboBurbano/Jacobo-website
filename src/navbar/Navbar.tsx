import './Navbar.css'
import NavImage from '../images/nav.png'
import { InterfaceItem } from './interface-navbar'
export const NavBar = () => {
    const itemsNavbar: InterfaceItem[] = [{name: 'Home', path: '.'}, {name: 'Projects', path: '.'}, {name: 'Skills', path: '.'}]
    return ( 
        <nav className="navbar">
            <ul className="navbar-list">
            <img src={NavImage} alt="" className='nav-image' />
                {itemsNavbar.map(item => (
                    <Item name={item.name} path={item.path} />
                ))}
            </ul>
        </nav>
    )
}
const Item = ({name, path}: {name:string, path:string}) => {
    return (
        <li className='item-list'>
            <a href={path}>
                <p>{name}</p>
            </a>
        </li>
    )
}