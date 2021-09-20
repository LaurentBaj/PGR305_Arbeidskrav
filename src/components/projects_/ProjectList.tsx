import {FC, useEffect, useState} from "react";
import {ProjectItem} from "./ProjectItem";
import {getProjects} from "./projects_data";
import {IProject} from "../../interfaces/interfaces";
import {Link} from "react-router-dom";


export const ProjectList:FC = () => {
    const [projects, setProjects] = useState<Array<IProject>>(
        getProjects
    )

    useEffect(() => {
        setProjects(getProjects)
    }, [projects])

    return (
        <>
            <section>
                {projects.map( (e) => {
                    return(
                        <Link to={`/projects/edit`}>
                            <ProjectItem name={e.name} status={e.status} employees={e.employees} />
                        </Link>
                    )
                })}
            </section>
        </>
    )
}