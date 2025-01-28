import './Navbar.css'
import NavImage from '../images/nav.png'
import { InterfaceItem } from './interface-navbar'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { handleClick } from '../Utils'
import { LanguageContext } from '../language/Language'
export const NavBar = () => {
    const language = useContext(LanguageContext)
    let [itemsNavbar, setItemsNavbar] = useState<InterfaceItem[]>([])
    useEffect(() => {
        language == 'en' ? setItemsNavbar([{name: 'Home', path: '../'}, {name: 'Projects', path: '../projects'}, {name: 'Skills', path: '../skills'}, {name: 'Experience', path: '../experience'}, {name: 'Contact', path: '../contact'}]): setItemsNavbar([{name: 'Inicio', path: '../'}, {name: 'Proyectos', path: '../projects'}, {name: 'Habilidades', path: '../skills'}, {name: 'Experiencia', path: '../experience'}, {name: 'Contacto', path: '../contact'}])
    }, [language])
    return (
            <>
                <NavbarResponsive items={itemsNavbar}/>
                <NavbarDefault items={itemsNavbar}/>
            </>
    )
}
const NavbarDefault = ({items}: {items: InterfaceItem[]}) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {items.map((item, index) => (
                    <Item name={item.name} path={item.path} key={index}/>
                ))}
            </ul>
        </nav>
    )
}
const NavbarResponsive = ({items}: {items: InterfaceItem[]}) => {
    let [isVisible, setVisible] = useState<boolean>(false)
    return (
        <nav className='navbar'>
            <ul className="navbar-list__responsive">
                <img src={NavImage} alt="" className='nav-image' onClick={handleClick(isVisible, setVisible)}/>
                <div className={`div-items ${isVisible ? 'visible' : 'invisible '}`}>
                    {items.map((item, index) => (
                        <Item name={item.name} path={item.path} key={index}/>
                    ))}
                </div>
            </ul>
        </nav>
    )
}
const Item = ({name, path}: {name:string, path:string}) => {
    return (
        <li className='item-list'>
            <Link to={path}>
                <p>{name}</p>
            </Link>
        </li>
    )
}