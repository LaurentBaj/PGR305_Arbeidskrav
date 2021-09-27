import {FC} from "react";

export const Home:FC = () => {
    return (
        <>
            <h1>Manage your Projects, Employees and Customers</h1>
            <img className="img-fluid" src={require("../assets/images/home.jpg").default} alt=""/>
        </>
    )
}