import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import KomunitasCardImage from "../assets/img/komunitas/komunitasCard.png"

function KomunitasPage() {
    return (
        <Container className='komunitas py-5' >
            <Row>
            <Col>
                <Card className="Card-Komunitas" style={{ width: '50rem' }}>
                    <Card.Body>
                        <Row>
                        <Col md={3} className="cardImg">
                            <img src={KomunitasCardImage} style={{width:"150px", height:"150px"}}></img>
                        </Col>
                        <Col className="CardDesc">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        </Col>
                        </Row>
                    </Card.Body>
                    </Card>
            </Col>
            <Col>
                <Card className="Card-Information" style={{ width: '15rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default KomunitasPage