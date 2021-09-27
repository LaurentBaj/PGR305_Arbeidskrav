import {FC, useContext, useState} from "react";
import {useParams} from "react-router-dom"
import {IEmployee, IProject} from "../interfaces/interfaces";
import {ProjectContext} from "../contexts/ProjectContext";
import {ProjectContextType} from "../types/ProjectContextType";
import {EmployeeItem} from "../components/employees/EmployeeItem";
import {EditProjectForm} from "../components/projects_/EditProjectForm";
import {Status} from "../components/shared/enums";
import {ProjectItem} from "../components/projects_/ProjectItem";


export const ProjectView:FC<IProject> = () => {
    const {name} = useParams() as any
    const {projects} = useContext(ProjectContext) as ProjectContextType
    const [project] = useState(projects.find(p => p.name === name))

    return (
        <>
            {/*View Specific Project clicked on, show all its employees + Form to alter project details*/}
            <ProjectItem name={project?.name as string} status={project?.status as Status} employees={project?.employees as IEmployee[]} />
            <h2>Employees</h2>
            {project?.employees.map( (e) => {return <EmployeeItem name={e.name} job_desc={e.job_desc} /> })}
            <EditProjectForm name={project?.name as string} status={project?.status as Status} employees={project?.employees as IEmployee[]} />
        </>
    )
}