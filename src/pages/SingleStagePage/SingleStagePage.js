import React, { useEffect } from 'react'
import { Card, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ActStage from '../../components/ActStage/ActStage'
import { getSingleStage } from '../../store/singleStage/actions'
import { selectSignleStage } from '../../store/singleStage/selectors'

export default function SingleStagePage() {
    const { stageId } = useParams()
    const dispatch = useDispatch()
    const stage = useSelector(selectSignleStage)
    //console.log('when page mounted',stage)
    const acts = stage.acts
    //console.log('just acts', acts)

    useEffect(()=>{
        dispatch(getSingleStage(stageId))
    },[dispatch])

    return (
        <div>
            <Jumbotron>
                <h1>{stage.name}</h1>
            </Jumbotron>
            <Container>
                {acts ? acts.map(act => {
                    return (
                        <ActStage 
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
            </Container>
        </div>
    )
}
