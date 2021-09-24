import {IEmployee, IProject} from "../../interfaces/interfaces";
import {Status} from "../shared/enums";
import {getEmployees} from "../employees/employee-data";


// Default Projects and Employees
export const dummyEmps1 = Array<IEmployee>(
    getEmployees()[0],
    getEmployees()[1]
)
export const dummyEmps2 = Array<IEmployee>(
    getEmployees()[2],
    getEmployees()[3],
)
export const default_projects = Array<IProject>(
    {name: "Fix Servers", status: Status.START, employees: []},
    {name: "Integrate Build", status: Status.PENDING, employees: dummyEmps1},
    {name: "Improve Coverage", status: Status.FINISHED, employees: dummyEmps2},
)










