import React, { useState } from 'react'
import { Button, Card, Col, Dropdown, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToSchedule } from '../../store/plans/actions'
import { selectUser } from '../../store/user/selectors'
import { makeVIP } from '../../store/user/actions'

export default function Act(props) {
    const dispatch = useDispatch()
    const thisUser = useSelector(selectUser)

    const notPlannedButtonText = {
        text:'Add to your Schedule',
        variant:"primary",
        disabled:false
    }
    const plannedButtonText = {
        text:'Already added to Schedule',
        variant:"outline-secondary",
        disabled:true
    }
    const [buttonText ,setButtonText] = useState(notPlannedButtonText)

    

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
                                    : <Button variant={buttonText.variant} onClick={()=>{
                                            dispatch(addToSchedule(props.id))
                                            setButtonText(plannedButtonText)
                                        }}>
                                            {buttonText.text}
                                    </Button>
                                : props.stageVIP 
                                    ?   <Dropdown>
                                            <Dropdown.Toggle variant='warning'>
                                                Upgrade to VIP
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={()=>{
                                                    dispatch(makeVIP())
                                                    window.location.reload()
                                                    }}>Yes</Dropdown.Item>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item>No</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    : props.scheduled.find(user => user.id === thisUser.id) 
                                        ? <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                                    : <Button variant={buttonText.variant} disabled={buttonText.disabled} onClick={()=>{
                                            dispatch(addToSchedule(props.id))
                                            setButtonText(plannedButtonText)
                                        }}>
                                            {buttonText.text}
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