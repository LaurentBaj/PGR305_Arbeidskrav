import {FC, useContext, useEffect, useState} from "react";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {Status} from "../shared/enums";

export const AddProject:FC = () => {
    const [newProject, setNewProject] = useState("")
    const {addProject} = useContext(ProjectContext) as ProjectContextType

    useEffect(() => { // Empty field upon project creation
        setNewProject("")
    }, [addProject])

    return (
        <>
            <h1>Add Project</h1>
            <input type="text" value={newProject} onChange={e => {setNewProject(e.target.value)}}/>
            <button onClick={ () => addProject({name: newProject,
                status: Status.START, employees: []})}>Submit</button>
        </>
    )
}