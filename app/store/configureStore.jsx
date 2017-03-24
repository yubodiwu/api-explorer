import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from "redux";
import {bodyReducer, urlReducer, apiReducer} from "reducers";
import promise from "redux-promise";

export var configure = (intialState = {}) => {
    var reducers = combineReducers({
        body: bodyReducer,
        url: urlReducer,
        api: apiReducer
    });
    var createStoreWithMiddleware = applyMiddleware(promise)(createStore);

    return createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    // return createStoreWithMiddleware(reducers);
};
