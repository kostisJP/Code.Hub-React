import React from 'react';
import {Navbar, Nav,NavItem,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const Header = ()=>{
    return (
        <Navbar>
            <Row>
                <Col xs={12}>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Code.hub Dashboard</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                <NavItem to="#" href="#">Courses</NavItem> 
                </Nav>
                <Nav pullRight>
                <NavItem>Add new course</NavItem>
                </Nav>
                    </Navbar.Collapse>    
                </Col>
            </Row>
    </Navbar>
    );
}
export default Header;