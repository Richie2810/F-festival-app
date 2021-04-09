import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function ActStage(props) {
    return (
        <Card>
            <Row>
                <Col>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>Starts: {props.start}<br></br>Ends: {props.end}</Card.Text>
                    <Card.Text>Day: {props.day}</Card.Text>
                    <Button>Add to your Schedule</Button>
                </Col>
                <Col>
                    <Card.Img src={props.image} alt={props.name}/>
                </Col>
            </Row>
        </Card>
    )
}