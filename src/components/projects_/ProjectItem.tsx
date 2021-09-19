import {FC} from "react";
import {IProject} from "../../interfaces/interfaces";
import {EmployeeItem} from "../employees/EmployeeItem";

export const ProjectItem:FC<IProject> = ({name, status, employees}) => {
    return (
        <article>
            <h2>{name}</h2>
            <p>Status: {status}</p>
            {
                employees.map( employee => {
                    return <EmployeeItem key={employee.name} name={employee.name} job_desc={employee.job_desc} />
                })
            }
        </article>
    )
}