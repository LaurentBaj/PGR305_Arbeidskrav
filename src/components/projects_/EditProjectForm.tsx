import {FC, useState} from "react";
import {IEmployee, IProject} from "../../interfaces/interfaces";
import {Status} from "../shared/enums";

export const EditProjectForm:FC<IProject> = ({name, status, employees}) => {
    const [newName, setNewName] = useState(name)
    const [newStatus, setNewStatus] = useState(status as string)
    const [newEmp, setNewEmp] = useState("")

    return (
        <>
            <form>
                <h1>Edit</h1>
                <label>Project Name</label>
                <input value={newName} onChange={e => setNewName(e.target.value)} type="text"/>
                <label>Project Status: {status}</label>
                <input value={newStatus} onChange={e => setNewStatus(e.target.value)} type="text"/>
                <label>Add employee</label>
                <input value={newEmp} onChange={e => setNewEmp(e.target.value)} type="text"/>
                <button>Edit</button>
            </form>
        </>
    )
}