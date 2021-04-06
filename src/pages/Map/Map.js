import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import MapPng from '../../Images/Map.png'

export default function Map() {
    return (
        <div>
            <Jumbotron>
                <h1 className="head">Map</h1>
            </Jumbotron>
            <Container>
                <img src={MapPng} useMap="#stages" alt='festival map'/>
                <map name='stages'>
                    <area target="_self" alt="Stage 1" title="Stage 1" href="/stage/1" coords="125,94,200,154" shape="rect"/>
                    <area target="_self" alt="Stage 2" title="Stage 2" href="/stage/2" coords="275,64,364,123" shape="rect"/>
                    <area target="_self" alt="Stage 3" title="Stage 3" href="/stage/3" coords="516,154,635,273" shape="rect"/>
                    <area target="_self" alt="Stage 4" title="Stage 4" href="/stage/4" coords="186,334,218,370" shape="rect"/>
                    <area target="_self" alt="Stage 5" title="Stage 5" href="/stage/5" coords="246,365,278,399" shape="rect"/>
                    <area target="_self" alt="Stage 6" title="Stage 6" href="/stage/6" coords="306,334,380,392" shape="rect"/>
                </map>
            </Container>
        </div>
    )
}
