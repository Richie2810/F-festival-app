import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Lineup from '../../components/Lineup/Lineup'
import { getActs } from '../../store/acts/actions'
import { selectActs, SelectSingleAct } from '../../store/acts/selectors'
import { useHistory, useParams } from 'react-router-dom'
import './ActsPage.scss'
import ReactPlayer from 'react-player/lazy'
import { addToSchedule } from '../../store/plans/actions'



export default function ActsPage() {
    const { actId } = useParams()
    const dispatch = useDispatch()
    const acts = useSelector(selectActs)
    const history = useHistory()
    const singleAct = useSelector(SelectSingleAct(actId))
    const [imageClicked, setImageClicked] = useState(false)
    console.log('this is the act ID',singleAct)

    const onActClick = (id) => {
        history.push(`/acts/${id}`)
        setImageClicked(false)
    }


    useEffect(()=>{
        dispatch(getActs())
    },[dispatch])

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
                                            <Col className='text-center'>
                                                <Card.Title>{singleAct.name}</Card.Title>
                                                {imageClicked ? <ReactPlayer url={singleAct.video} />  : <Card.Img style={{width:640, height:360}} src={singleAct.image} alt={singleAct.name} onClick={()=>{setImageClicked(!imageClicked)}}/>}
                                            </Col>
                                            <Col className='text-center'>
                                                <Card.Text>Day: {singleAct.day}</Card.Text>
                                                <Card.Text>Stage: {singleAct.stage.name}</Card.Text>
                                                <Card.Text>Starts: {singleAct.start_time}<br></br>
                                                Ends: {singleAct.end_time}</Card.Text>
                                                {singleAct.stage.isVIP 
                                                    ? <Card.Text><strong>This is a VIP Stage</strong> <br></br> 
                                                    <Button>Upgrade to VIP</Button></Card.Text>
                                                    : null}
                                                <Card.Text>{singleAct.description}</Card.Text>
                                                <Card.Title>Click the Image to hear what they sound like!</Card.Title>
                                                <Button onClick={()=>{dispatch(addToSchedule(singleAct.id))}}>Add this act to your Schedule</Button>
                                            </Col>
                                        </Row>
                                    </Card>
                                    : null}
            </Container>

        </div>
    )
}
