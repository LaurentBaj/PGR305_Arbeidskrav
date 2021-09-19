import {FC} from "react";
import {IEmployee} from "../../interfaces/interfaces";

const EmployeeItem:FC<IEmployee> = ({name, job_desc}) => {
    return (
        <>
            <article>
                <h3>{name}</h3>
                <p>Job Description: {job_desc}</p>
            </article>
        </>
    )
}


export default EmployeeItem