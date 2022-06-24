import {Navbar, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const NavBar = () => {
    return(
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#home">Web Page</Navbar.Brand>
                <Nav className="justify-content-center" >
                    <LinkContainer to="/">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link href="#about">About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signin">
                        <Nav.Link href="#signin">SignIn</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sign-up">
                        <Nav.Link href="#signup">SignUp</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;