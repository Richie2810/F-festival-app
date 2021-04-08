import React, { useEffect } from 'react'
import { Breadcrumb, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Lineup from '../../components/Lineup/Lineup'
import { getActs } from '../../store/acts/actions'
import { selectActs, SelectSingleAct } from '../../store/acts/selectors'
import { useHistory, useParams } from 'react-router-dom'
import './ActsPage.scss'



export default function ActsPage() {
    const { actId } = useParams()
    const dispatch = useDispatch()
    const acts = useSelector(selectActs)
    const history = useHistory()
    const singleAct = useSelector(SelectSingleAct(actId))
    console.log('this is the act ID',singleAct)

    const onActClick = (id) => {
        history.push(`/acts/${id}`)
    }

    useEffect(()=>{
        dispatch(getActs())
    },[dispatch, history])

    return (
        <div>
            <Jumbotron>
                <h1 className="head">Acts</h1>
            </Jumbotron>
            <Container>
                <Card>
                    <Breadcrumb separator=">" >
                        {acts ? acts.map(act => {
                            return (
                                <Lineup 
                                    key={act.id}
                                    name={act.name}
                                    id={act.id}
                                    start={act.start_time}
                                    onActClick={onActClick}
                                />
                            )
                        }):null}
                    </Breadcrumb>
                </Card>
            </Container>
            <Container>
                        {singleAct ? <Card>
                                        <Row>
                                            <Col>
                                            <Card.Title>{singleAct.name}</Card.Title>
                                            <Card.Img src={singleAct.image} alt={singleAct.name}/>
                                            </Col>
                                        </Row>
                                    </Card>
                                    : null}
            </Container>

        </div>
    )
}
