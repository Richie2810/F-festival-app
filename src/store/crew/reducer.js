const initialState = {
    allCrew:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'crew/fetched': {
            console.log('inside reducer', action.payload)
            return {
                ...state,
                allCrew:[...action.payload]
            }
        }
        default:
            return state
    }
}