import {FC, useContext, useState} from "react";
import {useParams} from "react-router-dom"
import {IProject} from "../interfaces/interfaces";
import {ProjectContext} from "../contexts/ProjectContext";
import {ProjectContextType} from "../types/ProjectContextType";


export const EditProject:FC<IProject> = () => {
    const {name} = useParams() as any
    const {projects} = useContext(ProjectContext) as ProjectContextType
    const [project] = useState(projects.find(p => p.name === name))

    return (
        <>
            <h1>{project?.name}</h1>
        </>
    )
}