import {FC} from "react";
import {ProjectList} from "../components/projects_/ProjectList";
import {ProjectProvider} from "../contexts/ProjectContext";


export const Projects:FC = () => {
    return (
        <>
            <section>
                <h1>Projects</h1>
                <ProjectProvider>

                    <ProjectList />
                </ProjectProvider>
            </section>
        </>
    )
}

