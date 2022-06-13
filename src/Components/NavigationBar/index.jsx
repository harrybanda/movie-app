import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Movie App</Navbar.Brand>
        <Nav className="justify-content-end">
          <Link to="/liked" className="nav-link">
            Liked Movies
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
