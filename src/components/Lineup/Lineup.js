import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import './Lineup.scss'

export default function Lineup(props) {

    const onActClick = (id) => {
        props.onActClick(id)
    }
    
    //console.log(props.start)
    //console.log(props.id)
    const size = props.start === '21:30' ? 30 : 25
    return (
        <Breadcrumb.Item 
            style={{fontSize:size}}
            onClick={(e)=>{onActClick(props.id)}}
        >
            {props.name}
        </Breadcrumb.Item>
    )
}
