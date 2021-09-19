import {FC, useEffect, useState} from "react";
import {ProjectItem} from "./ProjectItem";
import {addProject, getProjects} from "./projects_data";
import {IProject} from "../../interfaces/interfaces";


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
                    return <ProjectItem name={e.name} status={e.status} employees={e.employees} />
                })}
            </section>
        </>
    )
}