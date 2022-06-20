import {Col, Container, Row} from "react-bootstrap";

function App() {
  return (
      <Container fluid>
        <Row className="header">
          <Col xs={2}>
            <img src="http://placeimg.com/100/50/people"/>
          </Col>
          <Col>
              <FontAwesomeIcon icon="fa-solid fa-folder" />
          </Col>
        </Row>
        <Row>
          <col>
          </col>
        </Row>
      </Container>
  );
}

export default App;
