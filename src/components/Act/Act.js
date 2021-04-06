import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'

export default function Act(props) {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row>
                    <Col>
                        {props.name}<br></br>
                        <Button>Add to your Schedule</Button> 
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
