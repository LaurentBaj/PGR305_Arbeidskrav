import {IEmployee, IProject} from "../interfaces/interfaces";

export type ProjectContextType = {
    projects: IProject[]
    all_employees: IEmployee[]
    addProject: (newProject: IProject) => void
}