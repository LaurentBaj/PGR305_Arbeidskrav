import {FC} from "react";
import {IProject} from "../../interfaces/interfaces";
import {EmployeeItem} from "../employees/EmployeeItem";

export const ProjectItem:FC<IProject> = ({name, status, employees}) => {
    return (
        <article>
            <h2>Project Name: {name}</h2>
            <p>Status: {status.toString()}</p>
            {
                employees.map( employee => {
                    return <EmployeeItem name={employee.name} job_desc={employee.job_desc} />
                })
            }
        </article>
    )
}