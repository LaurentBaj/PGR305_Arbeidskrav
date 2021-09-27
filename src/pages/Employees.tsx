import {FC, useContext, useState} from "react";
import {EmployeeList} from "../components/employees/EmployeeList";
import {ProjectContext} from "../contexts/ProjectContext";
import {ProjectContextType} from "../types/ProjectContextType";


export const Employees:FC = () => {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const {all_employees} = useContext(ProjectContext) as ProjectContextType

    function action() {
        if (!name || !job) alert("Fields might be empty")
        else if (!all_employees.some(e => e.name === name)) {
            setName("")
            setJob("")
            all_employees.push({name: name, job_desc: job})
        } else {
            alert("Employee is already registered")
        }
    }

    return (
        <>
            <section>
                <h3>Your Employees</h3>
                <input type="text" value={name} onChange={ (event) => setName(event.target.value)}/>
                <input type="text" value={job} onChange={ (event) => setJob(event.target.value)}/>
                <button onClick={action}>Add Employee</button>
                <EmployeeList  />
            </section>
        </>
    )
}


