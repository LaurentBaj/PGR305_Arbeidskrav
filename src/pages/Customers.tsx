import {FC} from "react";
import {CustomerList} from "../components/customers/CustomerList";

export const Customers:FC = () => {
    return (
        <>
            <section>
                <h1>Your Customers</h1>
                <CustomerList />
            </section>
        </>
    )
}

