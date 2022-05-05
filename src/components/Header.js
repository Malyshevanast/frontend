import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./header.css"
import logo from "../assets/logo.png";

import useToken from "../hooks/useToken";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const { loggedIn } = useToken();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <Navbar expand="sm">
      <Container>
        <Navbar.Brand ms-left as={Link} to="/">
          <img id="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />


        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/" disabled={pathname === "/"}>
              Главная
            </Nav.Link>
            <Nav.Link as={Link} to="/service" disabled={pathname === "/service"}>
              Услуги
            </Nav.Link>
            <Nav.Link as={Link} to="/record" disabled={pathname === "/record"}>
              Онлайн-запись
            </Nav.Link>
            <Nav.Link as={Link} to="/#contacts" disabled={pathname === "/#contacts"}>
              Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>



        {!loggedIn ? (
          <Nav.Link as={Link} to="/login" disabled={pathname === "/login"}>
            Вход
          </Nav.Link>
        ) : (
          <Nav.Link onClick={onLogout}>
            Выход
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;