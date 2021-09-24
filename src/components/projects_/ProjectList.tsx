import {FC, useContext, useEffect, useState} from "react";
import {IProject} from "../../interfaces/interfaces";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {ProjectItem} from "./ProjectItem";


export const ProjectList:FC = () => {
    const {projects} = useContext(ProjectContext) as ProjectContextType
    return (
        <section>
            {projects.map( (p, key) => {
                return <ProjectItem name={p.name} status={p.status} employees={p.employees} key={key} />
            })}
        </section>
    )
}