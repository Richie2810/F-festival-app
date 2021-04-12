import React from 'react'
import { Nav } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import NavbarItem from '../Navigation/NavbarItem';

export default function PlannerNav() {
    return (
        <div>
            <Navbar bg="primary" expand="lg" >
                <Navbar.Text className="text-white">Planner Bar</Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{ width: "100%" }} fill>
                        <NavbarItem path="/newsFeed" linkText="News Feed"/>
                        <NavbarItem path="/crew" linkText="Manage Crew" />
                        <NavbarItem path="/golfkart" linkText="Golf Karts" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
