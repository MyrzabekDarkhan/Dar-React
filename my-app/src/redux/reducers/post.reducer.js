const initialState = {
    postsData: [],
}

export default function(state= initialState, action) {
    switch(action.type) {
        case 'SET_POSTS': 
            return {
                ...state,
                postsData: action.payload,
            }
        default:
            return state;
    }
}