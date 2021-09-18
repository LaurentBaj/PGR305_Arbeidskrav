import {FC, useEffect, useState} from "react";
import {ICustomer} from "../../interfaces/interfaces";
import {getCustomers} from "./customer-data";
import CustomerItem from "./CustomerItem";


const CustomerList:FC<Array<ICustomer>> = () => {
    const [customers, setCustomers] = useState<Array<ICustomer>> ([])

    useEffect(() => {
        setCustomers(getCustomers)
    }, [])

    return (
        <>
            { customers.map( (customer) => {
                return <CustomerItem name={customer.name} />
            })}
        </>
    )
}


export default CustomerList