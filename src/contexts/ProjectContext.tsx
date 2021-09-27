import {createContext, FC, useState} from "react";
import {ProjectContextType} from "../types/ProjectContextType";
import {IEmployee, IProject} from "../interfaces/interfaces";
import {default_projects} from "../components/projects_/projects_data";
import {getEmployees} from "../components/employees/employee-data";


export const ProjectContext = createContext<ProjectContextType | null>(null)

export const ProjectProvider:FC = ({children}) => {
    const [projects, setProjects] = useState<IProject[]>(default_projects)
    const [all_employees] = useState<IEmployee[]>(getEmployees)

    const addProject = (newProject: IProject) => {
        setProjects([...projects, newProject])
    }

    return (
        <>
            <ProjectContext.Provider value={{projects, addProject, all_employees}}>
                {children}
            </ProjectContext.Provider>
        </>
    )
}