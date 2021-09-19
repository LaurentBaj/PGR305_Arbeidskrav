import {IEmployee, IProject} from "../../interfaces/interfaces";
import {Status} from "../shared/enums";
import {getEmployees} from "../employees/employee-data";


const dummyEmp1 = Array<IEmployee>(
    {name: "James", job_desc: "Backend"},
    {name: "Jenna", job_desc: "UI/UX"}
)

const dummyEmp2 = Array<IEmployee>(
    {name: "Amanda", job_desc: "Backend"},
    {name: "Robert", job_desc: "UI/UX"},
    {name: "Dwight", job_desc: "Assistant to the Regional Manager"},
)


const projects = Array<IProject>(
    {name: "Fix webpage", status: Status.PENDING, employees:dummyEmp1},
    {name: "Server update", status: Status.START, employees:dummyEmp2},
)



// GETTERS
export const getProjects = () => { // All projects
    return [...projects]
}

export const getProject = (proj: IProject) => { // Specific project
    let project = projects.find(name => name.name === proj.name)
    return project
}


// POST


