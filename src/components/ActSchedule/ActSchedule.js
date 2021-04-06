import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import moment from 'moment'

export default function Act(props) {
    moment().format('LT')
    return (
        <ListGroup>
            <ListGroup.Item style={{ width: '22rem' }}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        {props.name}<br></br>
                        <Card.Img src={props.image} alt={props.name}/>
                    </Col>
                    <Col>
                        {props.description} <br></br>
                        <Button>More</Button> 
                    </Col>
                    <Col>
                        <Card.Text size="sm">
                            Start: {props.start}<br></br> 
                            Ends: {props.end}
                        </Card.Text>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    )
}