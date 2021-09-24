import {IEmployee} from "../../interfaces/interfaces";


// All this code could be done with Context
const employees = Array<IEmployee>(
    {name: "Amanda", job_desc: "Backend"},
    {name: "Robert", job_desc: "UI/UX"},
    {name: "Dwight", job_desc: "Assistant to the Regional Manager"},
    {name: "James", job_desc: "Backend"},
    {name: "Jenna", job_desc: "UI/UX"}
)

export const getEmployees = () => {
    return [...employees]
}

export const addEmployee = (name: string, job:string) => {
    if (name && job) employees.push({name: name, job_desc:job})
    else alert("You have an empty field!")
}


