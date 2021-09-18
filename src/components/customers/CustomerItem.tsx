import {FC} from "react";
import {ICustomer} from "../../interfaces/interfaces";


const CustomerItem:FC<ICustomer> = ({name}) => {
    return (
        <>
            <article>
                <h3>{name}</h3>
            </article>
        </>
    )
}


export default CustomerItem