import React, { useEffect, useState } from 'react'
import { Jumbotron, Card, Dropdown, ButtonGroup, Button, Form, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getStages } from '../../store/stages/actions'
import { selectStages } from '../../store/stages/selectors'
import Stage from '../../components/Stage/Stage'

export default function StagesPage() {
    const dispatch = useDispatch()
    const [day, setDay] = useState(1)
    const stagesForDay = useSelector(selectStages)
    console.log(stagesForDay)

    useEffect(()=>{
        dispatch(getStages(day))
    },[dispatch, day])

    return (
        <div>
            <Jumbotron>
                <Container>
                    <Card>
                        <Card.Img />
                        <Card.Body>
                            <Card.Title>
                                Stages
                            </Card.Title>
                            <Card.Text>
                                Which Day?
                                <Form.Control
                                    as="select"
                                    custom
                                    onChange={(e)=>{setDay(e.target.value)}}
                                >   
                                    <option value='1'>Friday</option>
                                    <option value='2'>Saturday</option>
                                    <option value='3'>Sunday</option>
                                </Form.Control>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
            {stagesForDay ? stagesForDay.map(stage => {
                return (
                    <Stage 
                        key={stage.id}
                        name={stage.name}
                        isVIP={stage.isVIP}
                        acts={stage.acts}
                    />
                )
            }):null}
        </div>
    )
}
