import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToSchedule } from '../../store/plans/actions'
import { selectUser } from '../../store/user/selectors'

export default function Act(props) {
    const dispatch = useDispatch()
    const thisUser = useSelector(selectUser)

    // console.log('are they vip?',thisUser.isVIP)

    return (
        <ListGroup>
            <ListGroup.Item >
                <Row>
                    <Col>
                        {props.name}<br></br>
                        {thisUser.token 
                            ? thisUser.isVIP && props.stageVIP
                                ? props.scheduled.find(user => user.id === thisUser.id) 
                                    ? <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                                    : <Button onClick={()=>{
                                            dispatch(addToSchedule(props.id))
                                            window.location.href = '/stages'
                                        }}>
                                            Add to your Schedule
                                    </Button>
                                : props.stageVIP 
                                    ? <Button variant="warning">Upgrade to VIP</Button>
                                    : props.scheduled.find(user => user.id === thisUser.id) 
                                        ? <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                                        : <Button onClick={()=>{
                                                dispatch(addToSchedule(props.id))
                                                window.location.href = '/stages'
                                            }}>
                                                Add to your Schedule
                                        </Button>
                            :null
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