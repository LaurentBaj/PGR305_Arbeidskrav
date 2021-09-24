import {IEmployee, IProject} from "../../interfaces/interfaces";
import {Status} from "../shared/enums";


// Default Projects and Employees
export const dummyEmps1 = Array<IEmployee>(
    {name: "James", job_desc: "Backend"},
    {name: "Jenna", job_desc: "UI/UX"}
)
export const dummyEmps2 = Array<IEmployee>(
    {name: "Amanda", job_desc: "Backend"},
    {name: "Robert", job_desc: "UI/UX"},
    {name: "Dwight", job_desc: "Assistant to the Regional Manager"},
)
export const default_projects = Array<IProject>(
    {name: "Fix Servers", status: Status.START, employees: []},
    {name: "Integrate Build", status: Status.PENDING, employees: dummyEmps1},
    {name: "Improve Coverage", status: Status.FINISHED, employees: dummyEmps2},
)

//
// // Projects
// const projects = Array<IProject>(
//     {name: "Fix webpage", status: Status.PENDING, employees:dummyEmp1},
//     {name: "Server update", status: Status.START, employees:dummyEmp2},
// )
//
//
// export const projectFocus = (projectName:string) => {
//     const current = getProjects().find(p => p.name === projectName)
//     return current
// }
//
//
//
// // GETTERS
// export const getProjects = () => { // All projects
//     return [...projects]
// }
//
//
//
//
//
// // POST
// export const addProject = (projectName: string) => { // Add single project (NULL emp by default)
//     const project: IProject = {name: projectName, status:Status.START, employees: []}
//     projects.push(project)
// }










