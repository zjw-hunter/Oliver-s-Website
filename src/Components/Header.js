import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

export default class Header extends React.Component {

    render() {
        const style = {height: 40, width: 40}
        const fgColor="#FFFFFF"
        return (
            <Navbar bg={"light"} expand={"lg"} fixed="top">
                <Navbar.Brand href="/">Oliver Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="my-navbar">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={SocialIcon} url="https://www.facebook.com/Oliverpwh/" style={style} fgColor={fgColor}></Nav.Link>
                        <Nav.Link as={SocialIcon} url="https://twitter.com/oliverpwh" style={style} fgColor={fgColor}></Nav.Link>
                        <Nav.Link as={SocialIcon} url="https://www.instagram.com/oliverpwh/" style={style} fgColor={fgColor}></Nav.Link>
                        <Nav.Link as={SocialIcon} url="https://www.youtube.com/channel/UCqq5AsrmGFyYU8jNjsScPYQ" style={style} fgColor={fgColor}></Nav.Link>
                        <Nav.Link as={SocialIcon} url="https://soundcloud.com/oliverpwh" style={style} fgColor={fgColor}></Nav.Link>
                        <Nav.Link as={SocialIcon} url="https://www.linkedin.com/in/oliver-hunter-399977149/" style={style} fgColor={fgColor}></Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
                
                            
            </Navbar>
        )
    }
}