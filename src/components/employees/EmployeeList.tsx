import {FC, useEffect, useState} from "react";
import {IEmployee} from "../../interfaces/interfaces";
import {EmployeeItem} from "./EmployeeItem";
import {getEmployees} from "./employee-data";

export const EmployeeList: FC = () => {
    const [ employees, setEmployees ] = useState<Array<IEmployee>>([])

    useEffect( () => {
        setEmployees(getEmployees)
    }, [employees])

    return (
        <>
            { employees.map( (employee) => {
                return <EmployeeItem name={employee.name} job_desc={employee.job_desc} />
            })}
        </>
    )
}

