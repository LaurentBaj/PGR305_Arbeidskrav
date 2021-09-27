import {FC} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainNavigation} from "../components/shared/MainNavigation";
import {Customers, Employees, Home, Projects, ProjectView} from "../pages"
import {ProjectProvider} from "../contexts/ProjectContext";
import "./routing.css"


export const Routing: FC = () => {
    return (
        <>
            <BrowserRouter>
                <MainNavigation />
                <Switch>
                    <div className={"this_style"}>
                        <Route exact path={"/"} component={Home} />
                        <Route path={"/customers"} component={Customers} />
                        <ProjectProvider>
                            <Route path={"/employees"} component={Employees} />
                            <Route exact path={"/projects"} component={Projects} />
                            <Route path={`/projects/edit/:name`} component={ProjectView} />
                        </ProjectProvider>
                    </div>
                </Switch>
            </BrowserRouter>
        </>
    )
}


