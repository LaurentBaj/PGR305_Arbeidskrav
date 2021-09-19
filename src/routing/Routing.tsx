import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainNavigation} from "../components/shared/MainNavigation";
import {Customers, Employees, Projects} from "../pages"


export const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <Route path={"/employees"} component={Employees} />
                    <Route path={"/projects_"} component={Projects} />
                    <Route path={"/customers"} component={Customers} />
                </Switch>
            </BrowserRouter>
        </>
    )
}


