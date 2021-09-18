import {FC} from "react";
import EmployeeList from "../components/employees/EmployeeList";

const Employees:FC = () => {
    return (
        <>
            <section>
                <h3>Your Employees</h3>
                <EmployeeList />
                <button>Add Employee</button>
            </section>
        </>
    )
}
export default Employees


