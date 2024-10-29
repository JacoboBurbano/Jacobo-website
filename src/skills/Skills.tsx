import { InterfaceSkills } from "./interface-skills"
import { Tecnologies } from "../tecnologies/Tecnologies"
import './Skills.css'
import { NavBar } from "../navbar/Navbar"
export const SkillsPage = () => {
    return (
        <>
            <NavBar/>
            <div className="separation">
                <Skills/>
            </div>
        </>
    )
}
export const Skills = () => {
    const skillsInfo: InterfaceSkills[] = [{title: 'Frontend', content: 'Comencé mi viaje en el desarrollo frontend aprendiendo JavaScript, junto con HTML y CSS, enfocándome en dominar JavaScript a fondo mientras comprendía los conceptos básicos de programación. Este enfoque me permitió desarrollar una base sólida que luego me llevó a aprender TypeScript por su capacidad de hacer el código más manejable y seguro. Finalmente, descubrí React, que se ha convertido en mi herramienta principal para crear aplicaciones web dinámicas y eficientes. Hoy en día, utilizo este stack para construir interfaces modernas y escalables.', tecnologies: ['javascript', 'css', 'html', 'typescript', 'react']}, {title: 'Backend', content: 'Comencé a aprender Python debido a su versatilidad y simplicidad, lo que me permitió cubrir de manera eficiente los conceptos esenciales del desarrollo backend. A medida que profundizaba en este campo, realicé un exhaustivo curso de MySQL mientras simultáneamente aprendía FastAPI, una herramienta ligera y rápida para crear APIs. Más adelante, incorporé el manejo de MariaDB y MongoDB para diversificar mi experiencia con bases de datos relacionales y no relacionales. Finalmente, descubrí Django, que se ha convertido en mi herramienta preferida para construir aplicaciones robustas y completas.', tecnologies: ['python', 'django', 'mariaDB', 'mySQL', 'mongoDB']}, {title: 'DevOps', content: 'En mi trayectoria de desarrollo web, descubrí la importancia de los empaquetadores. Empecé con esbuild y Vite debido a su simplicidad, y también tengo conocimiento en Rollup y Webpack. Estas herramientas se han vuelto esenciales para optimizar y estructurar el código en cada proyecto. Finalmente, decidí aprender Docker al reconocer su utilidad para entornos de desarrollo consistentes y escalables, completando varios cursos para comprender sus fundamentos.', tecnologies:['vite', 'esbuild', 'docker']}]
    return (
        skillsInfo.map(skill => 
            <Skill title={skill.title} content={skill.content} tecnologies={skill.tecnologies}/>
        )
    )
}
const Skill = ({title, content, tecnologies}: InterfaceSkills) => {
    return (
        <div className="div-skill">
            <div className="title-skill">
                <h4>{title}</h4>
                <hr style={{height: "-webkit-fill-available"}} />
            </div>
            <div className="content-skill">
                <p className="p-content">{content}</p>
                <ul className="tecnologies-list__skill">
                    <Tecnologies tecnologies={tecnologies}/>
                </ul>
            </div>
        </div>
    )
}