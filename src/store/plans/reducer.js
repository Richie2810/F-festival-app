const initialState = {
    allPlans:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'plans/fetched' : {
            const acts = action.payload.map(act => {
                return {
                    ...act.act
                }
            })
            //console.log('inside reducer', acts)
            return {
                ...state,
                allPlans:[...acts]
            }
        }
        default: 
            return state
    }
}