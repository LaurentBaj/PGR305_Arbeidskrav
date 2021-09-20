import {IEmployee, IProject} from "../../interfaces/interfaces";
import {Status} from "../shared/enums";


// Default Employees
const dummyEmp1 = Array<IEmployee>(
    {name: "James", job_desc: "Backend"},
    {name: "Jenna", job_desc: "UI/UX"}
)
const dummyEmp2 = Array<IEmployee>(
    {name: "Amanda", job_desc: "Backend"},
    {name: "Robert", job_desc: "UI/UX"},
    {name: "Dwight", job_desc: "Assistant to the Regional Manager"},
)


// Projects
const projects = Array<IProject>(
    {name: "Fix webpage", status: Status.PENDING, employees:dummyEmp1},
    {name: "Server update", status: Status.START, employees:dummyEmp2},
)


// GETTERS
export const getProjects = () => { // All projects
    return [...projects]
}

// export const getProject = (proj: IProject) => { // Specific project
//     let project = projects.find(name => name.name === proj.name)
//     return project
// }



// POST
export const addProject = (projectName: string) => { // Add single project (NULL emp by default)
    const project: IProject = {name: projectName, status:Status.START, employees: []}
    projects.push(project)
}





