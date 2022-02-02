import  { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
<Container>

<Navbar.Brand href="#home">
      <img
        src="/starwaresBlack.png"
        width="60"
        height="40"
        className="d-inline-block align-top"
      
      />   
    </Navbar.Brand>


  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">


    <Nav >

      <Nav.Link href="/"><i className="fas fa-shopping-cart"></i> People</Nav.Link>
      <Nav.Link href="/planets"><i className="fas fa-shopping-cart"></i> Planets</Nav.Link>
      


    </Nav>


    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search People"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>


  </Container>
</Navbar>
        </header>
    )
}

export default Header