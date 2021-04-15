const initialState = {
    allTrackers:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'tracker/fetched': {
            //console.log('inside reducer', action.payload)
            return {
                ...state,
                allTrackers:[...action.payload]
            }
        }
        default:
            return state
    }
}