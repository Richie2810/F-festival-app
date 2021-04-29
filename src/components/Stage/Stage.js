import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import Acts from '../../components/Act/Act'
import './Stage.css'

export default function Stage(props) {
    const acts = props.acts
    //console.log(props)
    return (
        <Col className='p-3'>
            <Container className='stages' style={{backgroundImage: `url(${props.bg})`}}>
                <Card style={{ width: '38rem', backgroundImage: `url(${props.bg})`}}>
                    <Card.Title style={{color:'white'}}>
                        {props.name}
                    </Card.Title>
                    <Card.Text className='text-muted'>
                        {props.isVIP ? 'This is a VIP Stage' : null}
                    </Card.Text>
                    <Container>
                        <Card >
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
                                        scheduled={act.users}
                                        stageVIP={props.isVIP}
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
