import React, { useEffect } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNews } from '../../store/news/actions';
import { selectToken } from '../../store/user/selectors';


export default function HomePage() {
    const token = useSelector(selectToken);
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getNews())
    },[dispatch])

    return (
        <div>
            <Jumbotron style={{backgroundColor: '#557A95'}}>
                <h1 className="head">Welcome to Musopolis Festival</h1>
                <h5 className="head">Come enjoy our festival by creating a schedule and not missing any of the acts on our multible stages</h5>
                {token ? null : <p className="head"><Link to="/login">Login here or sign up</Link></p>}
            </Jumbotron>
        </div>
    )
}
