import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Care Transport</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <NavDropdown title="Authentication" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1" href="/Login">Login</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2" href="/drivers">Register for Driver</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3" href="/users">Register for User</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.3" href="/registercar">Add Driver Car</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4.4" href="/userslist">UserList</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.4" href="/driverslist">DriverList</NavDropdown.Item>
                        </NavDropdown>
                        <li className="nav-item">
                            <a className="nav-link" href="/createRoom">CreateRoom</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
}

export default nav
