import React from 'react'
import {

    UrlButton,
    ImageEvent,
  } from '@merc/react-timeline';

export default function Act(props) {
    return (
            <ImageEvent
                date={`${props.start} - ${props.end}`}
                text={props.name}
                src={props.image}
                alt={props.name}
                credit={props.description}
            >
            <div>
                <UrlButton href={`/act/${props.id}`}>
                View more
                </UrlButton>
            </div>
            </ImageEvent>
    )
}