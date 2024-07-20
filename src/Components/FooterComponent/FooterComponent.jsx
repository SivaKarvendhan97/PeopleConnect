import { Container, Row, Col } from 'react-bootstrap';

function FooterComponent() {
  return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        <Container>
          <Row>
            <Col md="4">
              <h5>About Us</h5>
              <p>Some information about the company.</p>
            </Col>
            <Col md="4">
              <h5>Contact</h5>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </Col>
            <Col md="4">
              <h5>Follow Us</h5>
              <p>Social media links</p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };


export default FooterComponent;