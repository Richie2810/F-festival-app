const initialState = {
    allStages: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'stages/fetched':{
            // console.log('in reducer',action.payload)
            return {
                ...state,
                allStages:[...action.payload]
            }
        }
        default:
            return state
    }
}