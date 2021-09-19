import {FC} from "react";
import {ICustomer} from "../../interfaces/interfaces";

export const CustomerItem:FC<ICustomer> = ({name}) => {
    return (
        <>
            <article>
                <h3>{name}</h3>
            </article>
        </>
    )
}
