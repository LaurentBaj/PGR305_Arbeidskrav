import {FC} from "react";
import {ProjectList} from "../components/projects_/ProjectList";
import {ProjectProvider} from "../contexts/ProjectContext";
import {AddProject} from "../components/projects_/AddProject";


export const Projects:FC = () => {
    return (
        <>
            <section>
                <h1>Projects</h1>
                <ProjectProvider>
                    <AddProject />
                    <ProjectList />
                </ProjectProvider>
            </section>
        </>
    )
}

