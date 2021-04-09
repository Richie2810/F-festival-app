const initialState = {
    stage: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'singleStage/singleFetched': {
            //console.log('in reducer',action.payload)
            return {
                ...state,
                stage:action.payload
            }
        }
        default:
            return state
    }
}