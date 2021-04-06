import React, { useEffect } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getUsersPlans } from '../../store/plans/actions'

export default function Schedule() {
const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsersPlans())
    },[dispatch])

    return (
        <div>
            <Jumbotron>
                <h1 className="head">Schedule</h1>
            </Jumbotron>
        </div>
    )
}
