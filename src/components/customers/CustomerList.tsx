import {FC, useState} from "react";
import {ICustomer} from "../../interfaces/interfaces";
import {CustomerItem} from "./CustomerItem";
import {Col, Container} from "react-bootstrap";

export const CustomerList:FC = () => {
    const [ customers ] = useState<Array<ICustomer>>(
        [
            {name: "Peder"}, {name: "Frida"}, {name: "Even"},
            {name: "Sindre"}, {name: "Sopra Steria"}, {name: "Accenturre"}
        ]
    )

    return (
        <>
            <div className={"container-md"}>
                <ul>
                    <div className={"row"}>
                        {customers.map( (customer, key) => {
                            return <div className={"container-sm"}><CustomerItem name={customer.name} /></div>
                        })}
                    </div>
                </ul>
            </div>

        </>
    )
}
