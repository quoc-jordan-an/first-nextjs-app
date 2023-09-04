"use client";

import { usePathname} from "next/navigation"
import {Container, Nav, Navbar} from "react-bootstrap"

export default function NavBar() {
    const pathname = usePathname();
    

    return(
        <Navbar bg = "primary" variant = "dark" sticky = "top" expand = "sm" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">NextJS Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Navbar.Collapse id = "main-navbar">
                    <Nav>
                        <Nav.Link href = "/static" active={ pathname === '/static' }>Static</Nav.Link>
                        <Nav.Link href = "/dynamic" active={ pathname === '/dynamic' }>Dynamic</Nav.Link>
                        <Nav.Link href = "/isr" active={ pathname === '/isr' }>ISR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}