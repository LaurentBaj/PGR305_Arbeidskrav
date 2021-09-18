import {ICustomer} from "../../interfaces/interfaces";

const customers = Array<ICustomer>(
    {name: "BMI"},
    {name: "Capgemini"},
    {name: "Bouvet"},
    {name: "Sopra Steria"},
    {name: "Telenor"},
    {name: "Microsoft"},
    {name: "Facebook"},
    {name: "Twitter"},
)

export const getCustomers = () => { return [...customers] }