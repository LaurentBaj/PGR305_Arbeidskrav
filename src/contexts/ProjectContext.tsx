import {createContext, FC, useState} from "react";
import {ProjectContextType} from "../types/ProjectContextType";
import {IProject} from "../interfaces/interfaces";
import {default_projects} from "../components/projects_/projects_data";


export const ProjectContext = createContext<ProjectContextType | null>(null)

export const ProjectProvider:FC = ({children}) => {
    const [projects, setProjects] = useState<IProject[]>(default_projects)

    const addProject = (newProject: IProject) => {
        setProjects([...projects, newProject])
    }

    return (
        <>
            <ProjectContext.Provider value={{projects, addProject}}>
                {children}
            </ProjectContext.Provider>
        </>
    )
}