import { InterfacePlatformStyles } from "./interface-platform"
import './Experience.css'
import { useState } from "react"
import PlatziLogo from '../images/logo-platzi.webp'
import YoutubeLogo from '../images/logo-youtube.png'
import HackerRankLogo from '../images/logo-hackerrank.jpg'
export const Experience = () => {
    const platforms: InterfacePlatformStyles[] = [{name: 'Platzi', content: 'Empece mi camino con esta aplicacion bhdsabhdfhb hab hbshbdhasd bvshdf bhfbhsad dbsghdbshfb fhdbahsbdhsab ashbhsdbhas bhufdabu  bhsdbhsdb asdbhu bhsadpbs d', img: PlatziLogo, background: '#2C2F33', color: 'white'}, {name: 'Youtube', content: 'not now', img: YoutubeLogo, background: 'red', color: 'white'}, {name: 'Hacker rank', content: 'not now', img: HackerRankLogo, background: '#27B859', color: 'white'}]
    return (
        <div className="experience">
            {platforms.map(platform => 
                <Platform platform={platform} />
            )}
        </div>
    )
}
const Platform = ({platform} : {platform: InterfacePlatformStyles}) => {
    const [isVisible, setVisible] = useState<'invisible'|'visible'>('invisible')
    const handleClick = () => {
        switch (isVisible) {
            case 'invisible':
                setVisible('visible');
                break;
            default:
                setVisible('invisible');
                break;
        }
    };
    return (
        <div className="div-platform" style={{background: platform.background, color: platform.color}}>
            <img src={platform.img} alt="" className="img-logo"/>
            <h2>{platform.name}</h2>
            <big className="arrow-contact" onClick={handleClick} style={{cursor: 'pointer'}}>⇣</big>
            <p className={`content-platform ${isVisible}`}>{platform.content}</p>
        </div>
    )
}