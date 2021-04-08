const initialState = {
    allActs:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'acts/fetched': {
            //console.log('inside reducer', action.payload)
            return {
                ...state,
                allActs:[...action.payload]
            }
        }
        default:
            return state
    }
}