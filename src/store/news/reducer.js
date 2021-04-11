const initialState = {
    allNews:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'news/fetched':{
            return {
                ...state,
                allNews:[...action.payload]
            }
        }
        default:
            return state
    } 
    
}