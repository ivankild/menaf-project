import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import UserPage from './pages/UserPage';
import Users from './pages/Users';

function App() {
  return <BrowserRouter>
    <header>
      <Navbar bg="dark" expand="md" fixed="top" variant='dark'>
        <LinkContainer to="">
          <Navbar.Brand>Menaf project</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/users">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>

    <Container className="p-3 mt-5">
      <Switch>
        <Route path="/about" children={<About/>}/>
        <Route path="/users/:id" children={<UserPage/>}/>
        <Route path="/users" children={<Users/>}/>
        <Route exact path="/" children={<Home/>}/>
        <Route path="*" children={<Page404/>}/>
      </Switch>
    </Container>

  </BrowserRouter>;
}

export default App;
