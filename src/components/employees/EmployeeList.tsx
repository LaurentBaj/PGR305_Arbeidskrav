import {FC, useState} from "react";
import {IEmployee} from "../../interfaces/interfaces";
import EmployeeItem from "./EmployeeItem";

const EmployeeList: FC = () => {
    const [employees] = useState<Array<IEmployee>>(
        [
            {name: "Henrik", job_desc: "UI"},
            {name: "Venicia", job_desc: "Frontend"},
            {name: "Laurent", job_desc: "Backend"},
            {name: "David", job_desc: "HR"},
        ]
    )

    function renderEmployeeList() {
        return employees.map( (employee) => {
            return (
                <EmployeeItem name={employee.name} job_desc={employee.job_desc} />
            )
        })
    }

    return (
        <>
            { renderEmployeeList() }
        </>
    )
}

export default EmployeeList