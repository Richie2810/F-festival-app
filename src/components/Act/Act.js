import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToSchedule } from '../../store/plans/actions'

export default function Act(props) {
    const dispatch = useDispatch()
    return (
        <ListGroup>
            <ListGroup.Item style={{ backgroundImage: `url(${props.image})`, backgroundSize:'auto', backgroundPosition: "center"}}>
                <Row>
                    <Col>
                        {props.name}<br></br>
                        <Button onClick={()=>{dispatch(addToSchedule(props.id))}}>Add to your Schedule</Button> 
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
