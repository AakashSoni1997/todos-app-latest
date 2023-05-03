import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../styles.css";
export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="link-style">
            Todos
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link className="link-style" to="/login">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link-style" to="/signup">
                SignUp
              </Link>
            </Nav.Link>
            <Link to="/profile">
              <Image
                src="https://cdn.britannica.com/57/192357-050-62E912BD/hamster-Syria-households-pet.jpg"
                height={"40px"}
                width={"40px"}
                roundedCircle
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
