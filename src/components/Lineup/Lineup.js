import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import './Lineup.scss'

export default function Lineup(props) {

    const onActClick = (id) => {
        props.onActClick(id)
    }

    const size = parseInt(props.start)*1.5/100

    return (
        <Breadcrumb.Item 
            style={{fontSize:size}}
            onClick={(e)=>{onActClick(props.id)}}
        >
            {props.name}
        </Breadcrumb.Item>
    )
}
