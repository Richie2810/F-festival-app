import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToSchedule } from '../../store/plans/actions'
import { selectUser } from '../../store/user/selectors'

export default function Act(props) {
    const dispatch = useDispatch()
    const thisUser = useSelector(selectUser)

    console.log('scheduled',props.scheduled)

    return (
        <ListGroup>
            <ListGroup.Item >
                <Row>
                    <Col>
                        {props.name}<br></br>
                        {props.scheduled.find(user => user.id === thisUser.id) 
                            ? <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                            : <Button onClick={()=>{dispatch(addToSchedule(props.id))}}>Add to your Schedule</Button>
                        }
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


// style={{ backgroundImage: `url(${props.image})`, backgroundSize:'auto', backgroundPosition: "center"}}