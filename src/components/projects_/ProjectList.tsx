import {FC, useContext} from "react";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {ProjectItem} from "./ProjectItem";
import {Link} from "react-router-dom";


export const ProjectList:FC = () => {
    const {projects} = useContext(ProjectContext) as ProjectContextType

    return (
        <section>
            <ul>
                {projects.map( (p, key) => {
                    return (
                        <li key={key}>
                            <Link to={`/projects/edit/${p.name}`}>
                                <ProjectItem key={key} name={p.name} status={p.status} employees={p.employees} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}