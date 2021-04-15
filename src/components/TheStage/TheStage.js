import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import TheCrew from '../TheCrew/TheCrew'

export default function TheStage(props) {
    //console.log('this is crew',props.crew)
    return (
        <Row>
            <Card>
            <Card.Title className='text-center'>{props.name}</Card.Title>
                <Col>
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
                </Col>
            </Card>
        </Row>
    )
}
