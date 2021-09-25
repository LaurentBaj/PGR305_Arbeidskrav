import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainNavigation} from "../components/shared/MainNavigation";
import {Customers, Employees, Projects, EditProject} from "../pages"
import {ProjectProvider} from "../contexts/ProjectContext";


export const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <Route path={"/employees"} component={Employees} />
                    <Route path={"/customers"} component={Customers} />
                    <ProjectProvider>
                        <Route exact path={"/projects"} component={Projects} />
                        <Route path={`/projects/edit/:name`} component={EditProject} />
                    </ProjectProvider>
                </Switch>
            </BrowserRouter>
        </>
    )
}


