import {FC, useContext, useState} from "react";
import {useParams} from "react-router-dom"
import {IEmployee, IProject} from "../interfaces/interfaces";
import {ProjectContext} from "../contexts/ProjectContext";
import {ProjectContextType} from "../types/ProjectContextType";
import {EmployeeItem} from "../components/employees/EmployeeItem";
import {EditProjectForm} from "../components/projects_/EditProjectForm";
import {Status} from "../components/shared/enums";


export const ProjectView:FC<IProject> = () => {
    const {name} = useParams() as any
    const {projects} = useContext(ProjectContext) as ProjectContextType
    const [project] = useState(projects.find(p => p.name === name))

    return (
        <>
            <h1>{project?.name}</h1>
            <h3>{project?.status}</h3>
            {project?.employees.map( (e, key) => {
                return <EmployeeItem name={e.name} job_desc={e.job_desc} key={key} />
            })}
            {/* Not sure why I can't do this to show specific proj
                <ProjectItem name={project?.name} status={project?.status} employees={project?.employees} />
            */}
            <EditProjectForm name={project?.name as string} status={project?.status as Status} employees={project?.employees as IEmployee[]} />
        </>
    )
}