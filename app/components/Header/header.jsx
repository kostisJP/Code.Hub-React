import React from 'react';
import { Navbar, Nav, NavItem, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = () => {
    return (
        <Navbar>
            <Row>
                <Col xs={12}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/" className="navbar-item brand-text">Code.Hub Dashboard</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem href="/courses">Courses</NavItem>
                        </Nav> 
                        <Nav pullRight>
                            <NavItem href="/add-course">Add New Course</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Col>
            </Row>
        </Navbar>
    );
};
export default Header;