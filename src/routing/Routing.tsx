import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import Employees from "../pages/Employees";
import Projects from "../pages/Projects";
import Customers from "../pages/Customers";


const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <Route exact path={"/"} />
                    <Route path={"/employees"} component={Employees} />
                    <Route path={"/projects"} component={Projects} />
                    <Route path={"/customers"} component={Customers} />
                </Switch>
            </BrowserRouter>
        </>
    )
}


export default Routing