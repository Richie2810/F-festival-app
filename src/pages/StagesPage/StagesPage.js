import React, { useEffect, useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getStages } from '../../store/Stages/actions'


export default function StagesPage() {
    const dispatch = useDispatch()
    const [day, setDay] = useState(1)

    useEffect(()=>{
        dispatch(getStages(day))
    },[dispatch, day])

    return (
        <div>
            <Jumbotron>
                <h1 className="head">Stages</h1>
                <h6 className="head">Which day? <select className="head" onChange={(e)=>{setDay(e.target.value)}}>
                    <option value="1">Friday</option>
                    <option value="2">Saturday</option>
                    <option value="3">Sunday</option>
                </select></h6>
            </Jumbotron>
        </div>
    )
}
