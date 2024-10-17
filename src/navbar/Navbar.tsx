import './Navbar.css'
import NavImage from '../images/nav.png'
import { InterfaceItem } from './interface-navbar'
import { useEffect, useRef } from 'react'
import { LegacyRef } from 'react'
export const NavBar = () => {
    const itemsNavbar: InterfaceItem[] = [{name: 'Home', path: '.'}, {name: 'Projects', path: '.'}, {name: 'Skills', path: '.'}]
    let imgNav: null | LegacyRef<HTMLImageElement> = useRef(null)
    useEffect(() => {
        if(imgNav.current){
            imgNav.current.addEventListener('click', (event: Event) => {
                console.log(event.target)
            })
        }
    },[])
    return (
        <nav className="navbar">
            <ul className="navbar-list__responsive">
                <img src={NavImage} alt="" className='nav-image' ref={imgNav}/>
                {itemsNavbar.map((item, index) => (
                    <Item name={item.name} path={item.path} key={index}/>
                ))}
            </ul>
            <ul className="navbar-list">
                {itemsNavbar.map((item, index) => (
                    <Item name={item.name} path={item.path} key={index}/>
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