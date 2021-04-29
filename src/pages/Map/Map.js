import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import MapPng from '../../Images/festival-map.png'

export default function Map() {
    return (
        <div>
            <Jumbotron style={{backgroundColor:'#557A95'}} className='mt-4'>
                <h1 className="head">Map</h1>
            </Jumbotron>
            <Container>
                <img src={MapPng} useMap="#stages" alt='festival map'/>
                <map name='stages'>
                <area target="_self" alt="Disco Tent" title="Disco Tent" href="/stage/4" coords="156,895,113,914,85,937,69,969,70,1034,89,1064,115,1078,151,1087,182,1088,217,1083,243,1070,267,1054,275,1034,278,1011,277,963,265,937,239,919,206,901,184,895,176,882,170,897" shape="poly"/>
                <area target="_self" alt="Fire Stage" title="Fire Stage" href="/stage/3" coords="490,964,495,896,519,866,597,821,654,817,712,888,739,936,752,986,750,1037,673,1082" shape="poly"/>
                <area target="_self" alt="Maritim Stage" title="Maritim Stage" href="/stage/5" coords="288,847,287,685,490,585,495,747" shape="poly"/>
                <area target="_self" alt="Main Stage" title="Main Stage" href="/stage/1" coords="112,530,111,398,184,357,260,366,332,446,329,578,257,615" shape="poly"/>
                <area target="_self" alt="Pyramid Stage" title="Pyramid Stage" href="/stage/2" coords="195,305,58,234,182,45,265,124,318,154,352,220" shape="poly"/>
                <area target="_self" alt="Circus Tent" title="Circus Tent" href="/stage/6" coords="472,313,470,262,541,219,548,204,555,214,587,204,595,182,601,203,619,224,644,233,664,234,672,232,679,215,685,230,688,239,715,268,741,288,746,305,745,341,647,395,614,395" shape="poly"/>
                </map>
            </Container>
        </div>
    )
}
