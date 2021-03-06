import {FC, useContext, useState} from "react";
import {IProject} from "../../interfaces/interfaces";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {useHistory} from "react-router-dom";
import {Status} from "../shared/enums";
import {EmployeeItem} from "../employees/EmployeeItem";

export const EditProjectForm:FC<IProject> = ({name, status, employees}) => {
    const history = useHistory()

    // Form Elements
    const [newName, setNewName] = useState(name)
    const [newStatus, setNewStatus] = useState(status as string)
    const [empName, setEmpName] = useState("")
    const [empJob, setEmpJob] = useState("")

    // Current Project
    const {projects} = useContext(ProjectContext) as ProjectContextType
    const index = projects.findIndex(p => p.name === name)


    // All Projects
    const {all_employees} = useContext(ProjectContext) as ProjectContextType


    // Form Edit Functions
    function changeName() {
        projects[index].name = newName
        history.push("/projects")
    }

    function changeStatus(stat: Status) {
        if (stat.toUpperCase() === "START" ||
            stat.toUpperCase() === "PENDING" ||
            stat.toUpperCase() === "FINISHED")
        {
            projects[index].status = stat
            history.push("/projects")
        } else {
            alert("Status not recognized")
        }
    }

    function addEmployee(empName: string, empJob: string) {
        if (!empName || !empJob) {
            alert("Both fields for employee creation need to be filled")
        } else if(all_employees.some(e => e.name === empName)) {
            projects[index].employees.push({name: empName, job_desc:empJob}) // add emp to this project
            alert(`Employee: ${empName} has been added to Project: ${name}`)
            history.push("/projects")
        } else {
            alert("Employee does not exist in your firm. You can register this person" +
                "in the Employee-Site")
        }
    }

    return (
        <>
            <form>
                <h1>Edit</h1>
                <label>Project Name</label>
                <input value={newName} onChange={e => setNewName(e.target.value)} type="text"/>
                <button onClick={changeName}>Edit</button>
                <label>Project Status: {status}</label>
                <input value={newStatus} onChange={e => setNewStatus(e.target.value)} type="text"/>
                <p>(Start, Pending or Finished)</p>
                <button onClick={() => {changeStatus(newStatus as Status)}}>Edit</button>
                <br/>
                <h3>Add employee</h3>
                <p>(You can only add employees that are registered)</p>
                <label>Employee Name: </label>
                <input value={empName} onChange={e => setEmpName(e.target.value)} type="text"/>
                <label>Job Description: </label>
                <input  value={empJob} onChange={e => setEmpJob(e.target.value)} type="text"/>
                <button onClick={() => addEmployee(empName, empJob)} >Edit</button>
                <h3>List of employees in your firm</h3>
                {all_employees.map( (e, key) => {
                    return <li key={key}><EmployeeItem name={e.name} job_desc={e.job_desc} /></li>
                })}
            </form>
        </>
    )
}