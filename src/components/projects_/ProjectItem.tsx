import {FC} from "react";
import {IProject} from "../../interfaces/interfaces";

export const ProjectItem:FC<IProject> = ({name, status, employees}) => {
    return (
        <article>
            <p><b>{name}</b> - status: <b>{status}</b></p>
        </article>
    )
}