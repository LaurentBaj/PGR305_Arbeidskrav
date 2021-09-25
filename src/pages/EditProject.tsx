import {FC, useContext, useState} from "react";
import {useParams} from "react-router-dom"
import {IProject} from "../interfaces/interfaces";
import {ProjectContext} from "../contexts/ProjectContext";
import {ProjectContextType} from "../types/ProjectContextType";
import {EmployeeItem} from "../components/employees/EmployeeItem";


export const EditProject:FC<IProject> = () => {
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
        </>
    )
}