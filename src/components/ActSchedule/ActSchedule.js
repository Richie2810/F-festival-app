import React from 'react'
import {
    UrlButton,
    ImageEvent,
    Button,
  } from '@merc/react-timeline';
import { removeFromSchedule } from '../../store/plans/actions';
import { useDispatch } from 'react-redux';
import moment from 'moment'


export default function Act(props) {
    const dispatch = useDispatch()
    const start = moment(props.start, 'hmm').format("HH:mm")
    const end = moment(props.end, 'hmm').format("HH:mm")
    return (
            <ImageEvent
                date={`${start} - ${end}
                ${props.stage}`}
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