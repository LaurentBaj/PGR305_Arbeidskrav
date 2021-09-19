import {FC, useState} from "react";
import {ICustomer} from "../../interfaces/interfaces";
import {CustomerItem} from "./CustomerItem";

export const CustomerList:FC = () => {
    const [ customers ] = useState<Array<ICustomer>>(
        [
            {name: "Peder"}, {name: "Frida"}, {name: "Even"},
            {name: "Sindre"}, {name: "Sopra Steria"}, {name: "Accenturre"}
        ]
    )

    return (
        <>
            { customers.map( (customer) => {
                return <CustomerItem name={customer.name} />
            })}
        </>
    )
}
