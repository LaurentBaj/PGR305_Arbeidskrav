import {Status} from "../components/shared/enums";

export interface IEmployee {
    name: string;
    job_desc: string
}

export interface ICustomer {
    name: string
}

export interface IProject {
    name: string;
    status: Status;
    employees: Array<IEmployee>;
}