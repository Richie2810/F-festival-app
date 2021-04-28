import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ReactMapGL, { Marker, Popup }from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useDispatch, useSelector } from 'react-redux'
import { getTrackers, changeStatus } from '../../store/tracker/actions'
import { selectTrackers } from '../../store/tracker/selectors'

export default function GolfKarts() {
    const dispatch = useDispatch()
    const [viewport, setViewport] = useState({
        latitude: 51.97095174617914,
        longitude: 5.675216627398703,
        width: '900px',
        height: '600px',
        zoom: 17.570833117552784
    })
    const trackers = useSelector(selectTrackers)
    
    const [selectedEquip, setSelectedEquip] = useState(null)

    useEffect(()=>{
        dispatch(getTrackers())
    },[dispatch])

    
    // console.log(viewport)
    return (
        <div>
            <Container >
                <Card>
                    <Row >
                        <Col>
                            <ReactMapGL 
                                {...viewport} 
                                mapboxApiAccessToken={'pk.eyJ1IjoicmljaGllMjgxMCIsImEiOiJja25nNDBlaXcya3Y4Mm9tcWZ3anUxaWNmIn0.oXgCqR9oYAGluGdHwq4mAA'}
                                mapStyle='mapbox://styles/richie2810/ckng5ev420ner18mw6galdvn3'
                                onViewportChange={viewport=>{
                                    setViewport(viewport)
                                }}
                                >
                                {trackers ? trackers.map(tracker => {
                                    //console.log(parseFloat(tracker.latitude))
                                    return(
                                        <Marker 
                                            key={tracker.id}
                                            latitude={parseFloat(tracker.latitude)}
                                            longitude={parseFloat(tracker.longitude)}
                                        >
                                            {tracker.isEnabled 
                                                ?   <Button 
                                                        variant='primary'
                                                        onClick={(e)=>{
                                                            e.preventDefault()
                                                            setSelectedEquip(tracker)
                                                        }}>{tracker.id}
                                                    </Button>
                                                :   <Button 
                                                        variant='danger'
                                                        onClick={(e)=>{
                                                            e.preventDefault()
                                                            setSelectedEquip(tracker)
                                                        }}>{tracker.id}
                                                    </Button>
                                            }
                                        </Marker>
                                    )
                                }):null}
                                {selectedEquip
                                    ?   <Popup 
                                            latitude={parseFloat(selectedEquip.latitude)} 
                                            longitude={parseFloat(selectedEquip.longitude)}  
                                        >
                                                {selectedEquip.isEnabled 
                                                    ? <Button 
                                                        variant='danger'
                                                        onClick={()=>{
                                                            dispatch(changeStatus(selectedEquip.id, selectedEquip.isEnabled))
                                                            window.location.reload()
                                                            }}>
                                                            Disable</Button> 
                                                    : <Button 
                                                        variant='success'
                                                        onClick={()=>{
                                                            dispatch(changeStatus(selectedEquip.id))
                                                            window.location.reload()
                                                            }}>
                                                            Enable</Button>}
                                        </Popup>
                                    :null}
                            </ReactMapGL>
                        </Col>
                    </Row>
                </Card>
                
            </Container>
        </div>
    )
}
