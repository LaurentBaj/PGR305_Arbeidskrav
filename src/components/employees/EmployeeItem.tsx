import {FC} from "react";
import {IEmployee} from "../../interfaces/interfaces";

export const EmployeeItem:FC<IEmployee> = ({name, job_desc}) => {
    return (
        <>
            <article>
                <p><b>{name}</b> -- Job Description: <b>{job_desc}</b></p>
            </article>
        </>
    )
}


