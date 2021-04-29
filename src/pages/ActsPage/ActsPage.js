import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Col, Container, Dropdown, Jumbotron, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Lineup from '../../components/Lineup/Lineup'
import { getActs } from '../../store/acts/actions'
import { selectActs, SelectSingleAct } from '../../store/acts/selectors'
import { useHistory, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy'
import { addToSchedule } from '../../store/plans/actions'
import { selectUser } from '../../store/user/selectors'
import { makeVIP } from '../../store/user/actions'
import moment from 'moment'



export default function ActsPage() {
    const { actId } = useParams()
    const dispatch = useDispatch()
    const acts = useSelector(selectActs)
    const thisUser = useSelector(selectUser)
    const history = useHistory()
    const singleAct = useSelector(SelectSingleAct(actId))
    const [imageClicked, setImageClicked] = useState(false)
    
    
    const notPlannedButtonText = {
        text:'Add to your Schedule',
        variant:"primary",
        disabled:false
    }
    const plannedButtonText = {
        text:'Already added to Schedule',
        variant:"outline-secondary",
        disabled:true
    }
    const [buttonText ,setButtonText] = useState(notPlannedButtonText)

    const onActClick = (id) => {
        history.push(`/acts/${id}`)
        setImageClicked(false)
        window.scrollTo(0,0);
        // console.log('this user',singleAct.stage.background)
    }

    useEffect(()=>{
        dispatch(getActs())
    },[dispatch])

    return (
        <div>
            <Jumbotron style={{backgroundColor: '#557A95'}} className='mt-4'>
                <h1 className="head">Acts</h1>
            </Jumbotron>
            <Container>
                {singleAct 
                    ? 
                        <Card>
                            <Row style={{backgroundImage:`url(${singleAct.stage.background})`}}>
                                <Col className='text-center' >
                                    <Card.Title style={{color:'white', fontSize: 36}}>{singleAct.name}</Card.Title>
                                    {imageClicked ? <ReactPlayer url={singleAct.video} />  : <Card.Img style={{width:640, height:360}} src={singleAct.image} alt={singleAct.name} onClick={()=>{setImageClicked(!imageClicked)}}/>}
                                </Col>
                                <Col className='text-center' style={{color:'white'}}>
                                    <Card.Text>Day: {singleAct.day}</Card.Text>
                                    <Card.Text>Stage: {singleAct.stage.name}</Card.Text>
                                    <Card.Text>Starts: {moment(singleAct.start_time, 'hmm').format("HH:mm")}<br></br>
                                    Ends: {moment(singleAct.end_time, 'hmm').format("HH:mm")}</Card.Text>
                                    {singleAct.stage.isVIP 
                                        ? <Card.Text><strong>This is a VIP Stage</strong></Card.Text>
                                        : null}
                                    <Card.Text>{singleAct.description}</Card.Text>
                                    <Card.Title>Click the Image to hear what they sound like!</Card.Title>
                                    {thisUser.token 
                                        ? thisUser.isVIP && singleAct.stage.isVIP
                                            ? singleAct.users.find(user => user.id === thisUser.id) 
                                                ? <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                                                : <Button variant={buttonText.variant} disabled={buttonText.disabled} onClick={()=>{
                                                    dispatch(addToSchedule(singleAct.id))
                                                    setButtonText(plannedButtonText)
                                                }}>
                                                    {buttonText.text}
                                                </Button>
                                            :singleAct.stage.isVIP
                                                ?   <Dropdown>
                                                        <Dropdown.Toggle variant='warning'>
                                                            Upgrade to VIP
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={()=>{
                                                                dispatch(makeVIP())
                                                                window.location.reload()
                                                                }}>Yes</Dropdown.Item>
                                                            <Dropdown.Divider/>
                                                            <Dropdown.Item>No</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                : singleAct.users.find(user => user.id === thisUser.id) 
                                                    ?   <Button variant="outline-secondary" disabled>Already added to Schedule</Button>
                                                    :   <Button variant={buttonText.variant} disabled={buttonText.disabled} onClick={()=>{
                                                        dispatch(addToSchedule(singleAct.id))
                                                        setButtonText(plannedButtonText)
                                                    }}>
                                                            {buttonText.text}
                                                        </Button>
                                        :null}
                                </Col>
                            </Row>
                        </Card>
                    : null}
                </Container>
            <Container className='mt-4' >
                <Card>
                    <Breadcrumb separator=">" className='text-center' >
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
        </div>
    )
}
