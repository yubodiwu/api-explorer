import axios from "axios";

export var bodyReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case "CHANGE_BODY":
            var newState = JSON.parse(JSON.stringify(state));
            newState.body = action.payload;

            return newState;
        default:
            return state;
    }
};

export var urlReducer = (state = "", action) => {
    Object.freeze(state);

    switch (action.type) {
        case "CHANGE_URL":
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export var apiReducer = async (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case "API_REQUEST":
            console.log(action);
            var dataForJson = await fetch(action.payload.url, action.payload.options || {});
            var responseData = await dataForJson.json();
            console.log(responseData);

            var newState = JSON.parse(JSON.stringify(state));
            newState.api = responseData

            return newState;
        default:
            return state;
    }
};
