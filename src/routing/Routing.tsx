import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainNavigation} from "../components/shared/MainNavigation";
import {Customers, Employees, Home, Projects, ProjectView} from "../pages"
import {ProjectProvider} from "../contexts/ProjectContext";


export const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={"/employees"} component={Employees} />
                    <Route path={"/customers"} component={Customers} />
                    <ProjectProvider>
                        <Route exact path={"/projects"} component={Projects} />
                        <Route path={`/projects/edit/:name`} component={ProjectView} />
                    </ProjectProvider>
                </Switch>
            </BrowserRouter>
        </>
    )
}


