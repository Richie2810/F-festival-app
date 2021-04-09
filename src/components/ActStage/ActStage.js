import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { addToSchedule } from '../../store/plans/actions'
import { useDispatch} from 'react-redux'



export default function ActStage(props) {
    const dispatch = useDispatch()
    return (
        <Card>
            <Row>
                <Col>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>Starts: {props.start}<br></br>Ends: {props.end}</Card.Text>
                    <Card.Text>Day: {props.day}</Card.Text>
                    <Button onClick={()=>{dispatch(addToSchedule(props.id))}}>Add to your Schedule</Button>
                </Col>
                <Col>
                    <Card.Img src={props.image} alt={props.name}/>
                </Col>
            </Row>
        </Card>
    )
}
