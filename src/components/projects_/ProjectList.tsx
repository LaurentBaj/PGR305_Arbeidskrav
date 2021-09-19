import {FC, useEffect, useState} from "react";
import {IProject} from "../../interfaces/interfaces";
import {getProjects} from "./projects_data";
import {ProjectItem} from "./ProjectItem";

export const ProjectList:FC = () => {
    const [projects, setProjects] = useState<Array<IProject>>([])

    useEffect(() => {
        setProjects(getProjects)
    }, [projects])

    return (
        <>
            {projects.map( project => {
                return <ProjectItem name={project.name} status={project.status} employees={project.employees} />
            })}
        </>
    )
}