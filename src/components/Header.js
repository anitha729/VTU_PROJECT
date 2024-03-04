import React from 'react';
import {Navbar,Nav,NavDropdown,Container,Image} from 'react-bootstrap';

const Header=()=>{
    return(
        <header>
            <Navbar className="navbar-style" expand="lg"><Container><Navbar.Brand href="#"><Image className="logo-img-style" src="images\logo.jpg" alt="Logo" roundedCircle/>
            <h6 className="logo-text-style">Visvesvaraya Technological University, Belagavi</h6>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
       <NavDropdown title="Academic" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
            <NavDropdown.Item href="#">Circulars and Notifications</NavDropdown.Item>
            <NavDropdown.Item href="#">Certificates Issued</NavDropdown.Item>
       </NavDropdown>
       <NavDropdown title="Examination" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Examination Guidelines</NavDropdown.Item>
            <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
            <NavDropdown.Item href="#">Result</NavDropdown.Item>
       </NavDropdown>
       <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
            <NavDropdown.Item href="#">Computer Science Engineering</NavDropdown.Item>
            <NavDropdown.Item href="#">Electronics and Communication Engineering</NavDropdown.Item>
       </NavDropdown>
       <NavDropdown title="Staff Login" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
            
       </NavDropdown>
       
            </Nav>
            </Navbar.Collapse>
            
            </Container></Navbar>
            
        </header>
        


    )
}
export default Header