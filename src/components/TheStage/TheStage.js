import React from 'react'
import { Card, Col } from 'react-bootstrap'
import TheCrew from '../TheCrew/TheCrew'

export default function TheStage(props) {
    console.log('this is crew',props.bg)
    return (
        <Col className='p-2'>
            <Card className='text-center'style={{backgroundImage:`url(${props.bg})`}}>
            <Card.Title className='text-center' style={{color:'white'}}>{props.name}</Card.Title>
                    {props.crew.map(crew => {
                        return (
                            <TheCrew
                                key={crew.id}
                                id={crew.id}
                                name={crew.name}
                                job={crew.job}
                                tracker={crew.tracker}
                                stages={props.stages}
                                stage={props.name}
                            />
                        )
                    })}
            </Card>
        </Col>
    )
}
