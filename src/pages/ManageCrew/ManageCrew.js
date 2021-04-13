import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { getStagesForCrew } from '../../store/stages/actions'
import { selectStages } from '../../store/stages/selectors'
import TheStage from '../../components/TheStage/TheStage'

export default function ManageCrew() {
    const dispatch = useDispatch()
    const stages = useSelector(selectStages)
    // console.log('stages at selector', stages)

    useEffect(()=>{
        dispatch(getStagesForCrew())
    },[dispatch])

    return (
        <Container>
            <Row>
                {stages ? stages.map(stage => {
                    return (
                        <TheStage 
                            key={stage.id}
                            name={stage.name}
                            isVIP={stage.isVIP}
                            crew={stage.crews}
                            stages={stages}
                        />
                    )
                }):null}
            </Row>
        </Container>
    )
}