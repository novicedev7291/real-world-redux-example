export const promiseMiddleware = store => next => action => {
    if(isPromise(action.payload)){
        action.payload.then(
            res => {
                console.log(res);
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                console.log(error);
                action.error = true;
                action.payload = error.response.body;
                store.dispatch(action);
            }
        )
        return;
    }
    next(action);
};

const isPromise = v => {
    if(v && typeof v.then == 'function')
        return true;
    return false;
};