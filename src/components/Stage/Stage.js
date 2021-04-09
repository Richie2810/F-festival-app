import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import Acts from '../../components/Act/Act'
import './Stage.css'

export default function Stage(props) {
    const acts = props.acts
    return (
        <Col>
            <Container className='stages'>
                <Card style={{ width: '38rem' }}>
                    <Card.Title>
                        {props.name}
                    </Card.Title>
                    <Card.Text className='text-muted'>
                        {props.isVIP ? 'This is a VIP Stage' : null}
                    </Card.Text>
                    <Container>
                        <Card>
                            <Card.Header>{props.name}</Card.Header>
                            {acts ? props.acts.map(act=>{    
                                return (
                                    <Acts 
                                        key={act.id}
                                        id={act.id}
                                        name={act.name}
                                        day={act.day}
                                        start={act.start_time}
                                        end={act.end_time}
                                        description={act.description}
                                        image={act.image}
                                        video={act.video}
                                    />
                                )
                            }):null}
                        </Card>
                    </Container>
                </Card>
            </Container>
        </Col>
    )
}
