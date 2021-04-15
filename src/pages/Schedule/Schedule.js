import React, { useEffect } from 'react'
import { Card, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsersPlansFriday,selectUsersPlansSaturday,selectUsersPlansSunday } from '../../store/plans/selectors'
import { getUsersPlans } from '../../store/plans/actions'
import ActSchedule from '../../components/ActSchedule/ActSchedule'
import {
    Timeline,
    Events,
    TextEvent,
    UrlButton,
  } from '@merc/react-timeline';

export default function Schedule() {
    const dispatch = useDispatch()
    const plansFriday = useSelector(selectUsersPlansFriday)
    const plansSaturday = useSelector(selectUsersPlansSaturday)
    const plansSunday = useSelector(selectUsersPlansSunday)
    //console.log('this is plans',plansFriday)

    useEffect(()=>{
        dispatch(getUsersPlans())
    },[dispatch])

    return (
        <div>
            <Jumbotron>
                <h1 className="head">Schedule</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                    <Card>
                        <Card.Title>
                            Friday
                        </Card.Title>
                    
                            <Timeline>
                                <Events>
                                    {plansFriday.length !== 0 ? plansFriday.map(act => {
                                        return (
                                            <ActSchedule 
                                                key={act.id}
                                                id={act.id}
                                                name={act.name}
                                                day={act.day}
                                                start={act.start_time}
                                                end={act.end_time}
                                                description={act.description}
                                                image={act.image}
                                                video={act.video}
                                                stage={act.stage.name}
                                            />
                                        )
                                    })
                                        :
                                        <TextEvent date="" text="Make some plans to see acts on Friday!" >
                                            <div>
                                                <UrlButton href={`/stages`}>
                                                    To Stages
                                                </UrlButton>
                                            </div>
                                        </TextEvent>
                                        }
                                </Events>
                            </Timeline>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Title>
                            Saturday
                        </Card.Title>
                    
                            <Timeline>
                                <Events>
                                    {plansSaturday.length !== 0 ? plansSaturday.map(act => {
                                        return (
                                            <ActSchedule 
                                                key={act.id}
                                                id={act.id}
                                                name={act.name}
                                                day={act.day}
                                                start={act.start_time}
                                                end={act.end_time}
                                                description={act.description}
                                                image={act.image}
                                                video={act.video}
                                                stage={act.stage.name}
                                            />
                                        )
                                    })
                                        :
                                        <TextEvent date="" text="Make some plans to see acts on Saturday!" >
                                            <div>
                                                <UrlButton href={`/stages`}>
                                                    To Stages
                                                </UrlButton>
                                            </div>
                                        </TextEvent>
                                    }
                                </Events>
                            </Timeline>
                        </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Title>
                            Sunday
                        </Card.Title>
                    
                            <Timeline>
                                <Events>
                                    {plansSunday.length !== 0 ? plansSunday.map(act => {
                                        return (
                                            <ActSchedule 
                                                key={act.id}
                                                id={act.id}
                                                name={act.name}
                                                day={act.day}
                                                start={act.start_time}
                                                end={act.end_time}
                                                description={act.description}
                                                image={act.image}
                                                stage={act.stage.name}
                                                video={act.video}
                                            />
                                        )
                                    })
                                        :   
                                                <TextEvent date="" text="Make some plans to see acts on Sunday!">
                                                <div>
                                                    <UrlButton href={`/stages`}>
                                                       To Stages
                                                    </UrlButton>
                                                </div>
                                                </TextEvent>
                                        }
                                </Events>
                            </Timeline>
                        </Card>
                    </Col>
                </Row>

            </Container> 
        </div>
    )
}
