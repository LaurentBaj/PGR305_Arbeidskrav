import {FC, useState} from "react";
import {ProjectList} from "../components/projects_/ProjectList";
import {addProject} from "../components/projects_/projects_data";


export const Projects:FC = () => {
    const [projectName, setProjectName] = useState("")
    return (
        <>
            <section>
                <h1>Projects</h1>
                <ProjectList />
                <h3>Create new project</h3>
                <input type="text" value={projectName} onChange={ (event) => setProjectName(event.target.value)}/>
                <button onClick={ () => addProject(projectName) }>Add</button>
            </section>
        </>
    )
}

