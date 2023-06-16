import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


export default function MainNav() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" className="fixed-top">
                <Container>
                    <Navbar.Brand>Jiaheng Wang</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref legacyBehavior>
                                Movies
                            </Link>
                            <Link href="/about" passHref legacyBehavior>
                                About
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br />
            <br />
        </div>
    );
}