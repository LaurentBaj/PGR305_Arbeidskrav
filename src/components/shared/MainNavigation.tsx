import {FC} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export const MainNavigation:FC = () => {
    return (
        <>
            <Navbar bg={"dark"} variant={"dark"}>
                <Container>
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Navbar.Brand>Managineering</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
                        <Nav.Link as={Link} to={"/employees"}>Employees</Nav.Link>
                        <Nav.Link as={Link} to={"/customers"}>Customers</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


