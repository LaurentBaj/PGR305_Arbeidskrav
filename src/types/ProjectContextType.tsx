import {IProject} from "../interfaces/interfaces";

export type ProjectContextType = {
    projects: IProject[]
    addProject: (newProject: IProject) => void
}