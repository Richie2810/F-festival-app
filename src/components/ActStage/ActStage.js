import React, { useState } from 'react'
import { Button, Card, Col, Dropdown, Row } from 'react-bootstrap'
import { addToSchedule } from '../../store/plans/actions'
import { useDispatch, useSelector} from 'react-redux'
import { selectUser } from '../../store/user/selectors'
import { makeVIP } from '../../store/user/actions'

export default function ActStage(props) {
    const thisUser = useSelector(selectUser)
    const dispatch = useDispatch()

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


    //console.log(thisUser)
    return (
        <Card>
            <Row>
                <Col>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>Starts: {props.start}<br></br>Ends: {props.end}</Card.Text>
                    <Card.Text>Day: {props.day}</Card.Text>
                    {thisUser.token 
                        ? thisUser.isVIP && props.stageVIP
                            ? props.scheduled.find(user => user.id === thisUser.id) 
                                ? <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                                : <Button variant={buttonText.variant} disabled={buttonText.disabled} onClick={()=>{
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
                    <Card.Img src={props.image} alt={props.name}/>
                </Col>
            </Row>
        </Card>
    )
}
