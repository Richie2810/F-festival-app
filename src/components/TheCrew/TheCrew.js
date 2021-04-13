import React from 'react'
import { Card, Col, Dropdown, DropdownButton} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { moveCrew } from '../../store/stages/actions'

export default function TheCrew(props) {
    const dispatch = useDispatch()
    return (
        <Col>   
            <Card>
                <Card.Title className='m-2 text-center ' style={{backgroundColor:'lightgrey'}}>
                    {props.name}
                </Card.Title>
                <Card.Text className='ml-2'>Job: {props.job}</Card.Text>
                <Card.Text className='ml-2'>Stage: {props.stage}</Card.Text>
                <Card.Text className='ml-2'>Equipment: {props.tracker ? `id: ${props.tracker.id}` : 'None'}</Card.Text>
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
