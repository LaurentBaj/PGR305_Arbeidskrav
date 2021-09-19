import {IEmployee} from "../../interfaces/interfaces";

const employees = Array<IEmployee>(
    {name: "Henrik", job_desc: "UI"},
    {name: "Venicia", job_desc: "Frontend"},
    {name: "Laurent", job_desc: "Backend"},
    {name: "David", job_desc: "HR"}
)

export const getEmployees = () => {
    return [...employees]
}

export const addEmployee = (name: string, job:string) => {
    if (name && job) employees.push({name: name, job_desc:job})
    else alert("You have an empty field!")
}


