import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

export default function NewsFeed(props) {
    return (
            <Card >
                <Card.Img src={props.image} alt={props.title}/>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button href={props.link}>Find out more!</Button>
            </Card>   
    )
}
