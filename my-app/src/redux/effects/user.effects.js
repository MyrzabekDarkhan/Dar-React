import { setUser, setLoading } from "../actions/user.actions";

export function getUser() {
    return function(dispatch, getState) {
        dispatch(setLoading(true));
        return fetch('http://ca-api.witharts.kz/students')
            .then(res => res.json())
            .then(users => {
                if (!users || !users.length) {
                    dispatch(setUser(null));
                    return;
                }
                console.log(users);
                const {firstName, lastName} = users[
                    Math.floor(Math.random() * users.length)
                ];

                dispatch(setUser({firstName, lastName}));
            })
            .finally(() => {
                dispatch(setLoading(false));
            });
    }    
}