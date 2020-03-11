import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import reducer from "./reducer";
import { createLogger } from "redux-logger";
import { promiseMiddleware } from "./middleware";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    reducer
});

export const history = createBrowserHistory();

const appRouterMiddleware = routerMiddleware(history);

const store = createStore(rootReducer(history), 
    compose(
        applyMiddleware(appRouterMiddleware, promiseMiddleware,createLogger())
    )
);

export default store;