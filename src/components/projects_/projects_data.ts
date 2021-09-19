import {IProject} from "../../interfaces/interfaces";
import {Status} from "../shared/enums";
import {getEmployees} from "../employees/employee-data";


const projects = Array<IProject>(
    {name: "Fix webpage", status: Status.PENDING, employees:getEmployees()},
    {name: "Server update", status: Status.START, employees:getEmployees()},
    {name: "Support", status: Status.FINISHED, employees:getEmployees()}
)


export const getProjects = () => {
    return [...projects]
}

export const getProject = (proj: IProject) => {
    let project = projects.find(name => name.name == proj.name)
    return project
}