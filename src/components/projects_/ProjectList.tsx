import {FC, useContext} from "react";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {ProjectItem} from "./ProjectItem";
import {Link} from "react-router-dom";


export const ProjectList:FC = () => {
    const {projects} = useContext(ProjectContext) as ProjectContextType

    return (
        <section>
            {projects.map( (p, key) => {
                return (
                    <Link to={`/projects/edit/${p.name}`}>
                        <ProjectItem key={key} name={p.name} status={p.status} employees={p.employees} />
                    </Link>
                )
            })}
        </section>
    )
}