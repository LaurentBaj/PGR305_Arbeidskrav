import {FC, useState} from "react";
import {IEmployee} from "../../interfaces/interfaces";
import EmployeeItem from "./EmployeeItem";

const EmployeeList: FC = () => {
    const [employee] = useState<Array<IEmployee>>(
        [
            {name: "Henrik", job_desc: "UI"},
            {name: "Venicia", job_desc: "Frontend"},
            {name: "Laurent", job_desc: "Backend"},
            {name: "David", job_desc: "HR"},
        ]
    )
    return (
        <>
            {
                employee.map( (employee) => {
                    return <EmployeeItem name={employee.name} job_desc={employee.job_desc} />
                })
            }
        </>
    )
}

export default EmployeeList