import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectToken } from '../../store/user/selectors';


export default function HomePage() {
    const token = useSelector(selectToken);

    return (
        <div>
            <Jumbotron>
                <h1 className="head">Welcome to Musopolis Festival</h1>
                <h5 className="head">Come enjoy our festival by creating a schedule and not missing any of acts on our multible stages</h5>
                {token ? null : <p className="head"><Link to="/signup">Login here or sign up</Link></p>}
            </Jumbotron>
            {/* <NewsFeed />
            <SocialMedia /> TODO */}
        </div>
    )
}
