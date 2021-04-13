import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import ReactMapGL, { Marker, Popup }from 'react-map-gl'
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
    const [isEnabledColor, setIsEnabledColor] = useState('primary')

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
                                mapboxApiAccessToken={'pk.eyJ1IjoicmljaGllMjgxMCIsImEiOiJja25nM3NjMnoxY2hhMnZvYXU1dHppM3JjIn0.msH9UkpKc97ALYxRDCud3g'}
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
                                                            setIsEnabledColor('danger')
                                                            window.location.reload()
                                                            }}>
                                                            Disable</Button> 
                                                    : <Button 
                                                        variant='success'
                                                        onClick={()=>{
                                                            dispatch(changeStatus(selectedEquip.id))
                                                            setIsEnabledColor('primary')
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