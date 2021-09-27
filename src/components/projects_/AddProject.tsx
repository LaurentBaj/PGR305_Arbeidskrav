import {FC, useContext, useState} from "react";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {Status} from "../shared/enums";
import {useHistory} from "react-router-dom";

export const AddProject:FC = () => {
    const [newProject, setNewProject] = useState("")
    const {projects} = useContext(ProjectContext) as ProjectContextType
    const history = useHistory()

    function action() {
        if (!newProject){
            alert("Field can't be empty")
        } else if (!newProject || !projects.some(p => p.name === newProject)) {
            projects.push({name: newProject, status: Status.START, employees: []})
            setNewProject("")
            history.push("/projects")
        } else {
            alert("Project Name already exists")
        }
    }

    return (
        <>
            <h1>Add Project</h1>
            <input placeholder={"Project name"} type="text" value={newProject} onChange={e => {setNewProject(e.target.value)}}/>
            <button onClick={action}>Submit</button>
        </>
    )
}