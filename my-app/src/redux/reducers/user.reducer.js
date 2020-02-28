const initialState = {
    userData: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_USER': 
            return {
                ...state,
                userData: action.payload,
            }
        case 'SET_LOADING': 
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}