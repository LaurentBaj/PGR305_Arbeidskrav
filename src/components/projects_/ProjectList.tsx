import {FC, useContext, useEffect, useState} from "react";
import {IProject} from "../../interfaces/interfaces";
import {ProjectContext} from "../../contexts/ProjectContext";
import {ProjectContextType} from "../../types/ProjectContextType";
import {ProjectItem} from "./ProjectItem";


export const ProjectList:FC = () => {
    const {projects} = useContext(ProjectContext) as ProjectContextType

    const createProjectList = () => {
        return projects.map( (project:IProject, key:number) => {
            return <ProjectItem name={project.name} status={project.status}
                                key={key} employees={project.employees} />
        })
    }

    return (
        <section>
            {createProjectList()}
        </section>
    )
}