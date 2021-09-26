import {FC, useContext, useState} from "react";
import {IProject} from "../../interfaces/interfaces";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {useHistory} from "react-router-dom";
import {Status} from "../shared/enums";

export const EditProjectForm:FC<IProject> = ({name, status, employees}) => {
    const history = useHistory()

    // Form Elements
    const [newName, setNewName] = useState(name)
    const [newStatus, setNewStatus] = useState(status as string)
    const [newEmp, setNewEmp] = useState("")

    // Current Project
    const {projects} = useContext(ProjectContext) as ProjectContextType
    const index = projects.findIndex(p => p.name === name)


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

    return (
        <>
            <form>
                <h1>Edit</h1>
                <label>Project Name</label>
                <input value={newName} onChange={e => setNewName(e.target.value)} type="text"/>
                <button onClick={changeName}>Edit</button>
                <label>Project Status: {status}</label>
                <input value={newStatus} onChange={e => setNewStatus(e.target.value)} type="text"/>
                <button onClick={() => {changeStatus(newStatus as Status)}}>Edit</button>
                <label>Add employee</label>
                <input value={newEmp} onChange={e => setNewEmp(e.target.value)} type="text"/>
                <button>Edit</button>
            </form>
        </>
    )
}