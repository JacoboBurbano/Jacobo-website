import { colorTecnologies, TypeTecnologies } from "./object-tecnologies"
import { InterfaceTecnologies } from "./interface-tecnologies"
export const Tecnologies = ({tecnologies}: {tecnologies: TypeTecnologies[]}) => {
    let tecnologiesHex = addColorTecnologies(tecnologies)
    return (
        <ul>
            {tecnologiesHex.map(tecnologies => 
                <li style={{background: `${tecnologies.color}`}} key={tecnologies.color}>
                    <p>{tecnologies.name.charAt(0).toUpperCase() + tecnologies.name.slice(1)}</p>
                </li>
            )}
        </ul>
    )
}
const addColorTecnologies = (tecnologies: TypeTecnologies[]) => {
    let tecnologiesHex: InterfaceTecnologies[] = []
    for(let i = 0; i < tecnologies.length; i++){
        let name: TypeTecnologies  = tecnologies[i]
        const tecnologieHex: InterfaceTecnologies = {color: colorTecnologies[name], name}
        tecnologiesHex.push(tecnologieHex)
    }
    return tecnologiesHex
}