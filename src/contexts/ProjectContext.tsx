import {createContext, FC, useState} from "react";
import {ProjectContextType} from "../types/ProjectContextType";
import {IProject} from "../interfaces/interfaces";
import {Status} from "../components/shared/enums";
import {dummyEmps1, dummyEmps2} from "../components/projects_/projects_data";

export const ProjectContext = createContext<ProjectContextType | null>(null)

export const ProjectProvider:FC = ({children}) => {
    const [projects, setProjects] = useState<IProject[]>([
        {name: "Fix Servers", status: Status.START, employees: []},
        {name: "Integrate Build", status: Status.PENDING, employees: dummyEmps1},
        {name: "Improve Coverage", status: Status.FINISHED, employees: dummyEmps2},
    ])

    const addProject = (newProject: IProject) => {setProjects([...projects, newProject])}

    return (
        <>
            <ProjectContext.Provider value={{projects, addProject}}>
                {children}
            </ProjectContext.Provider>
        </>
    )
}