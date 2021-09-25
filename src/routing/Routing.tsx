import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainNavigation} from "../components/shared/MainNavigation";
import {Customers, Employees, Projects, EditProject} from "../pages"


export const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <Route path={"/employees"} component={Employees} />
                    <Route exact path={"/projects"} component={Projects} />
                    <Route path={"/customers"} component={Customers} />
                    <Route path={`/projects/edit/:name`} component={EditProject} />
                </Switch>
            </BrowserRouter>
        </>
    )
}


