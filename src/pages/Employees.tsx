import {FC, useState} from "react";
import {EmployeeList} from "../components/employees/EmployeeList";
import {addEmployee} from "../components/employees/employee-data";


export const Employees:FC = () => {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    function action() {
        setName("")
        setJob("")
        addEmployee(name, job)
    }

    return (
        <>
            <section>
                <h3>Your Employees</h3>
                <input type="text" value={name} onChange={ (event) => setName(event.target.value)}/>
                <input type="text" value={job} onChange={ (event) => setJob(event.target.value)}/>
                <button onClick={action}>Add Employee</button>
                <EmployeeList />
            </section>
        </>
    )
}


