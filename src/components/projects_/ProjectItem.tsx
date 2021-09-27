import {FC} from "react";
import {IProject} from "../../interfaces/interfaces";

export const ProjectItem:FC<IProject> = ({name, status, employees}) => {
    return (
        <article>
            <p><b>{name}</b> - Status: <b>{status}</b></p>
        </article>
    )
}