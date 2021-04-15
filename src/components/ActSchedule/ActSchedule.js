import React from 'react'
import {
    UrlButton,
    ImageEvent,
    Button,
  } from '@merc/react-timeline';
import { removeFromSchedule } from '../../store/plans/actions';
import { useDispatch } from 'react-redux';



export default function Act(props) {
    const dispatch = useDispatch()
    return (
            <ImageEvent
                date={`${props.start} - ${props.end}`}
                text={props.name}
                src={props.image}
                alt={props.name}
            >
            <div>
                <UrlButton href={`/acts/${props.id}`}>
                More
                </UrlButton>
                <Button style={{backgroundColor:'red'}} onClick={()=>{dispatch(removeFromSchedule(props.id))}}>
                    Remove
                </Button>
            </div>
            </ImageEvent>
    )
}