import {FC, useContext} from "react";
import {EmployeeItem} from "./EmployeeItem";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";



export const EmployeeList: FC = () => {
    const {all_employees} = useContext(ProjectContext) as ProjectContextType

    return (
        <>
            { all_employees.map( (employee) => {
                return <EmployeeItem name={employee.name} job_desc={employee.job_desc} />
            })}
        </>
    )
}

