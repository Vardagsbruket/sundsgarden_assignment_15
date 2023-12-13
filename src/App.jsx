import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <Navbar expand="lg">
        <Container className="navContainer">
          <Navbar.Brand href="">HomeLogo</Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Posts</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <Container fluid className="container">
        <Row mt-3>
          <Col sm={4}>
            <Card.Body className="card">
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt consequuntur suscipit, debitis atque ipsa dolore
                consectetur quam, quos vitae sed nostrum tempore reprehenderit
                illum excepturi inventore amet dicta fuga magnam?
              </Card.Text>
              <Button variant="light">Info</Button>
            </Card.Body>{" "}
          </Col>
          <Col sm={4}>
            <Card.Body className="card">
              <Card.Title>Card Title 2</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt consequuntur suscipit, debitis atque ipsa dolore
                consectetur quam, quos vitae sed nostrum tempore reprehenderit
                illum excepturi inventore amet dicta fuga magnam?
              </Card.Text>
            </Card.Body>{" "}
          </Col>
          <Col sm={4}>
            <Card.Body className="card">
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt consequuntur suscipit, debitis atque ipsa dolore
                consectetur quam, quos vitae sed nostrum tempore reprehenderit
                illum excepturi inventore amet dicta fuga magnam?
              </Card.Text>
              <Button variant="dark">Find out more</Button>
            </Card.Body>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body className="card">
              <Card.Title>Card Title 4</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt consequuntur suscipit, debitis atque ipsa dolore
                consectetur quam, quos vitae sed nostrum tempore reprehenderit
                illum excepturi inventore amet dicta fuga magnam?
              </Card.Text>
            </Card.Body>{" "}
          </Col>
          <Col>
            <Card.Body className="card">
              <Card.Title>Card Title 5</Card.Title>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt consequuntur suscipit, debitis atque ipsa dolore
                consectetur quam, quos vitae sed nostrum tempore reprehenderit
                illum excepturi inventore amet dicta fuga magnam?
              </Card.Text>
            </Card.Body>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body className="card">
              <Card.Title>Card Title 5</Card.Title>
              <Card.Subtitle>Subtitle</Card.Subtitle>
              <Card.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt consequuntur suscipit, debitis atque ipsa dolore
                consectetur quam, quos vitae sed nostrum tempore reprehenderit
                illum excepturi inventore amet dicta fuga magnam?
              </Card.Text>
              <Button variant="warning">Important</Button>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
