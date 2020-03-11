export const LOGIN = "LOGIN";
export const UPDATE_AUTH_FIELD = "UPDATE_AUTH_FIELD";
export const REDIRECT = "REDIRECT";


const reducer = (state={}, action) => {
    switch(action.type) {
        case LOGIN: 
            return {
                ...state,
                redirectTo: action.error ? null: '/',
                user: action.payload
            };
        case REDIRECT:
            return {
                ...state,
                redirectTo: null
            }
        case UPDATE_AUTH_FIELD:
            return {
                ...state,
                [action.key]: action.value
            }
        default: 
            return state
    }
};

export default reducer;

