import {FC} from "react";
import {ProjectList} from "../components/projects_/ProjectList";

export const Projects:FC = () => {
    return (
        <>
            <section>
                <h1>Projects</h1>
                <ProjectList />
            </section>
        </>
    )
}

