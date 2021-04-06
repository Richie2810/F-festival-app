import React, { useEffect } from 'react'
import { Jumbotron } from 'react-bootstrap'

export default function Schedule() {
const dispatch = useDispatch()
const plans = useSelector(selectUsersPlans)
console.log(plans)

    useEffect(()=>{
        dispatch(getUsersPlans())
    },[dispatch])

    return (
        <div>
            <Jumbotron>
                <h1 className="head">Schedule</h1>
            </Jumbotron>
            {plans ? plans.map(act => {
                return (
                    <ActSchedule 
                        key={act.id}
                        name={act.name}
                        day={act.day}
                        start={act.start_time}
                        end={act.end_time}
                        description={act.description}
                        image={act.image}
                        video={act.video}
                    />
                )
            }):null}
        </div>
    )
}
