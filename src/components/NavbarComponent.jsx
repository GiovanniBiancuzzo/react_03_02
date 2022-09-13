import { Badge, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = () => {
    const location = useLocation();
    const companiesLength = useSelector((state) => state.favourite.list.length);

    return (
        <Navbar
            collapseOnSelect
            expand="md"
            className="navbar navbar-expand-lg navbar-dark"
        >
            <Nav>
                <Link
                    to="/"
                    className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                    }`}
                >
                    Home
                </Link>
                <Link
                    to="/favourites"
                    className={`nav-link ${
                        location.pathname === "/favourites" ? "active" : ""
                    }`}
                >
                    Favourite jobs{" "}
                    <Badge variant="danger">{companiesLength}</Badge>
                </Link>
            </Nav>
        </Navbar>
    );
};

export default NavbarComponent;
