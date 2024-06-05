import {Navbar, Container, Nav, Image} from "react-bootstrap"
import logo from "../assets/img/PawpalsNavbar.png";
import { NavLink } from "react-router-dom"
import Homepage from "../pages/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar expand="lg" className="nav-bg">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={logo} height={30} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <div className="nav-link">
                        <NavLink to="/">Beranda</NavLink>
                        <NavLink to="/artikelpage">Artikel</NavLink>
                        <NavLink to="/komunitaspage">Komunitas</NavLink>
                        <NavLink to="/kontakpage">Kontak</NavLink>
                    </div>
                </Nav>
                <div>
                        <Link to="/registerpage" className="btn-daftar me-2" style={{textDecoration: 'none'}}>Daftar</Link>
                        <Link to="/loginpage" className="btn-masuk"  style={{textDecoration: 'none'}} >Masuk</Link>
                </div>
                </Navbar.Collapse>
            </Container>
    </Navbar>
        </div>
    )
}

export default NavbarComponent