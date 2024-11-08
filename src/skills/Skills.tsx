import { InterfaceSkills } from "./interface-skills"
import { Tecnologies } from "../tecnologies/Tecnologies"
import './Skills.css'
import { NavBar } from "../navbar/Navbar"
import { Footer } from "../footer/Footer"
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "../language/Language"
export const SkillsPage = () => {
    return (
        <>
            <NavBar/>
            <Skills/>
            <Footer/>
        </>
    )
}
export const Skills = () => {
    let [skillsInfo, setSkillsInfo] = useState<InterfaceSkills[]>([])
    const language = useContext(LanguageContext)
    useEffect(() => {
        language == 'es' ? setSkillsInfo([{title: 'Frontend', content: 'Comencé mi viaje en el desarrollo frontend aprendiendo JavaScript, junto con HTML y CSS, enfocándome en dominar JavaScript a fondo mientras comprendía los conceptos básicos de programación. Este enfoque me permitió desarrollar una base sólida que luego me llevó a aprender TypeScript por su capacidad de hacer el código más manejable y seguro. Finalmente, descubrí React, que se ha convertido en mi herramienta principal para crear aplicaciones web dinámicas y eficientes. Hoy en día, utilizo este stack para construir interfaces modernas y escalables.', tecnologies: ['javascript', 'css', 'html', 'typescript', 'react']}, {title: 'Backend', content: 'Comencé a aprender Python debido a su versatilidad y simplicidad, lo que me permitió cubrir de manera eficiente los conceptos esenciales del desarrollo backend. A medida que profundizaba en este campo, realicé un exhaustivo curso de MySQL mientras simultáneamente aprendía FastAPI, una herramienta ligera y rápida para crear APIs. Más adelante, incorporé el manejo de MariaDB y MongoDB para diversificar mi experiencia con bases de datos relacionales y no relacionales. Finalmente, descubrí Django, que se ha convertido en mi herramienta preferida para construir aplicaciones robustas y completas.', tecnologies: ['python', 'django', 'mariaDB', 'mySQL', 'mongoDB']}, {title: 'DevOps', content: 'En mi trayectoria de desarrollo web, descubrí la importancia de los empaquetadores. Empecé con esbuild y Vite debido a su simplicidad, y también tengo conocimiento en Rollup y Webpack. Estas herramientas se han vuelto esenciales para optimizar y estructurar el código en cada proyecto. Finalmente, decidí aprender Docker al reconocer su utilidad para entornos de desarrollo consistentes y escalables, completando varios cursos para comprender sus fundamentos.', tecnologies:['vite', 'esbuild', 'docker']}]) : setSkillsInfo([{title: 'Frontend', content: 'I began my journey in frontend development by learning JavaScript alongside HTML and CSS, focusing on mastering JavaScript deeply while understanding the fundamentals of programming. This approach allowed me to build a solid foundation, which then led me to learn TypeScript for its ability to make code more manageable and secure. Finally, I discovered React, which has become my primary tool for creating dynamic and efficient web applications. Today, I use this stack to build modern and scalable interfaces.', tecnologies: ['javascript', 'css', 'html', 'typescript', 'react']}, {title: 'Backend', content: 'I started learning Python because of its versatility and simplicity, which allowed me to efficiently cover the essential concepts of backend development. As I delved deeper into this field, I completed an extensive MySQL course while simultaneously learning FastAPI, a lightweight and fast tool for building APIs. Later on, I incorporated MariaDB and MongoDB to diversify my experience with relational and non-relational databases. Finally, I discovered Django, which has become my preferred tool for building robust and comprehensive applications', tecnologies: ['python', 'django', 'mariaDB', 'mySQL', 'mongoDB']}, {title: 'DevOps', content: 'In my web development journey, I discovered the importance of bundlers. I started with esbuild and Vite due to their simplicity, and I also have knowledge of Rollup and Webpack. These tools have become essential for optimizing and structuring code in every project. Finally, I decided to learn Docker after recognizing its value for creating consistent and scalable development environments, completing several courses to understand its fundamentals.', tecnologies:['vite', 'esbuild', 'docker']}])
    }, [language])
    return (
        <div className="div-skills">
            <h1 className="title-skills">{language == 'es' ? 'Habilidades' : 'Skills'}</h1>
            <div className="skills">
                {skillsInfo.map(skill => 
                <Skill title={skill.title} content={skill.content} tecnologies={skill.tecnologies}/>
                )}
            </div>
        </div>
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