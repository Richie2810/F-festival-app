import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeNewsFeedItem } from '../../store/news/actions'
import { selectUser } from '../../store/user/selectors'


export default function NewsFeed(props) {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    return (
            <Card className='mb-2 text-center' style={{backgroundColor:'#7395AE'}}>
                <Card.Img src={props.image} alt={props.title}/>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Button href={props.link}>Find out more!</Button>
                {user.isPlanner 
                    ? <Button onClick={()=>{dispatch(removeNewsFeedItem(props.id))}} variant='danger'>DELETE</Button>
                    : null
                }
            </Card>   
    )
}
