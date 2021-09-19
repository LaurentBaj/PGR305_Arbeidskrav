import {FC} from "react";
import {CustomerList} from "../components/customers/CustomerList";

export const Customers:FC = () => {
    return (
        <>
            <section>
                <h3>Your Customers</h3>
                <CustomerList />
            </section>
        </>
    )
}

