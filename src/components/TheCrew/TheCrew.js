import React from 'react'
import { Card, Col, Dropdown, DropdownButton} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { moveCrew } from '../../store/stages/actions'

export default function TheCrew(props) {
    const dispatch = useDispatch()
    //console.log(props.stages)
    return (
        <Col>   
            <Card style={{backgroundColor:'lightyellow'}} className='mb-3'>
                <Card.Title style={{backgroundColor:'lightgrey'}} className='text-center'>
                    {props.name}
                </Card.Title>
                <Card.Text>Job: {props.job}</Card.Text>
                <Card.Text>Stage: {props.stage}</Card.Text>
                <Card.Text>Equipment: {props.tracker ? `id: ${props.tracker.id}` : 'None'}</Card.Text>
                <DropdownButton id="dropdown-item-button" title="Move Crew Member">
                    {props.stages.map(stage => {
                        return (
                            <Dropdown.Item key={stage.id} as="button"onClick={()=>{dispatch(moveCrew( stage.id, props.id ))}}>{stage.name}</Dropdown.Item>
                        )
                    })}
                </DropdownButton>
            </Card>
        </Col>
    )
}
