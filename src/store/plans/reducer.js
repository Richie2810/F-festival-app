const initialState = {
    friday:[],
    saturday:[],
    sunday:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'plans/fetched' : {
            console.log('inside reducer',action.payload)
            const friday = action.payload.filter(act => act.day === 1)
            const saturday = action.payload.filter(act => act.day === 2)
            const sunday = action.payload.filter(act => act.day === 3)
            return {
                ...state,
                friday:[...friday],
                saturday:[...saturday],
                sunday:[...sunday]
            }
        }
        default: 
            return state
    }
}