import { InterfaceSkills } from "./interface-skills"
import { Tecnologies } from "../tecnologies/Tecnologies"
import './Skills.css'
export const Skills = () => {
    const skillsInfo: InterfaceSkills[] = [{title: 'Frontend', content: 'My develop in frontend began ...', tecnologies: ['javascript', 'css', 'html', 'typescript', 'react']}, {title: 'Backend', content: 'My develop in backend began ...', tecnologies: ['python', 'django', 'mariaDB', 'mySQL', 'mongoDB']}]
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
            </div>
            <div className="content-skill">
                <p>{content}</p>
                <ul className="tecnologies-list__skill">
                    <Tecnologies tecnologies={tecnologies}/>
                </ul>
            </div>
        </div>
    )
}