import React from 'react'
import logo from '../logo.svg'
import { Container, Navbar } from 'react-bootstrap'

const Header = (): JSX.Element => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" /> Tools & Utilities
      </Navbar.Brand>
    </Container>
  </Navbar>
)

export default Header
