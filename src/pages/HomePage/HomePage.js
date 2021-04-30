import React, { useEffect } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import homePageImage from '../../Images/homePageImage.jpeg'

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
            <Jumbotron style={{backgroundColor: '#557A95'}} className='mt-4'>
                <h1 className="head">Welcome to Musopolis Festival</h1>
                <h5 className="head">Enjoy our festival by creating a schedule and not missing any of the acts on our six stages!</h5>
                {token ? null : <p className="head mt-5"><Link to="/login" style={{ color:'black' }}>Login here or Buy a Ticket</Link></p>}
            </Jumbotron>
            <div style={{width:600, height:600}}>
                <img src={homePageImage} alt='festival' style={{width:920, height:600}}/>
            </div>
        </div>
    )
}
