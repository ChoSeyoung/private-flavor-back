import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Row className="align-items-center row-top">
                        <Col>
                            private flavor logo
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="sidebar-parent">1st flavor</div>
                            <div className="sidebar-child">1-1st flavor</div>
                            <div className="sidebar-child">1-2nd flavor</div>
                            <div className="sidebar-child">1-3rd flavor</div>
                            <div className="sidebar-parent">2nd flavor</div>
                            <div className="sidebar-child">2-1st flavor</div>
                            <div className="sidebar-child">2-2nd flavor</div>
                            <div className="sidebar-child">2-3rd flavor</div>
                            <div className="sidebar-parent">3rd flavor</div>
                            <div className="sidebar-child">3-1st flavor</div>
                            <div className="sidebar-child">3-2nd flavor</div>
                            <div className="sidebar-child">3-3rd flavor</div>
                            <div className="sidebar-parent">4th flavor</div>
                            <div className="sidebar-child">4-1st flavor</div>
                            <div className="sidebar-child">4-2nd flavor</div>
                            <div className="sidebar-child">4-3rd flavor</div>
                            <div className="sidebar-parent">5th flavor</div>
                            <div className="sidebar-child">5-1st flavor</div>
                            <div className="sidebar-child">5-2nd flavor</div>
                            <div className="sidebar-child">5-3rd flavor</div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="align-items-center row-top">
                        <Col xs={8} className="text-start" >
                            <FontAwesomeIcon icon={faBars}/>
                        </Col>
                        <Col xs={2} className="text-end">
                            <FontAwesomeIcon icon={faEllipsisVertical}/>
                        </Col>
                    </Row>
                    <Row>
                        <h2>contents title</h2>
                        <h5>contents summary</h5>
                        <p>contents detail</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
