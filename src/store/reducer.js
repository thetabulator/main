const initialState = {
    posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET':
            return{
                ...state,
                posts: action.value
            }
        
    
    }
    return state
}
export default reducer