export const setUser = user => {
    return {
        type: 'SET_USER',
        payload: user,
    }
}
export const setLoading = status => {
    return {
        type: 'SET_LOADING',
        payload: status
    }
}